import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { addJobAPI } from '../../services/allAPI'
import { jobContext } from '../../contextAPI/ContextShare'

function AddJob() {
  const { addJobResponse, setAddJobResponse } = useContext(jobContext)
  const [modalStatus, setModalStatus] = useState(false)
  const [newJob, setNewJob] = useState({
    title: "", location: "", jobType: "", salary: "", qualification: "", experience: "",
    description: ""
  })

  const handleReset = () => {
    setNewJob({
      title: "", location: "", jobType: "", salary: "", qualification: "", experience: "",
      description: ""
    })
  }

  const handleAddJob = async () => {
    const token = sessionStorage.getItem("token")
    const { title, location, jobType, salary, qualification, experience, description } = newJob
    if (!title || !location || !jobType || !salary || !qualification || !experience || !description) {
      toast.info("Please fill the form completely!!!")
    } else if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      // api call
      try {
        const result = await addJobAPI(newJob, reqHeader)
        if (result.status == 200) {
          //alert job add
          toast.success("Current job added successfully!!!")
          //reset data
          handleReset()
          //share data to context
          setAddJobResponse(result.data)
          // close modal
          setModalStatus(false)
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          handleReset()
        } else {
          toast.error("Something went wrong....")
        }
      } catch (err) {
        console.log(err);
        toast.warning("Something went wrong....")
      }
    } else {
      toast.warning("Something went wrong....")
    }
  }



  return (

    <div>
      <button onClick={() => setModalStatus(true)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ">
        <FontAwesomeIcon icon={faPlus} />
        Add Job
      </button>

      {/* modal */}
      {
        modalStatus &&
        <div className='relative z-10 overflow-y-auto'>
          <div className='bg-gray-500/75 fixed inset-0 '>
            <div className='flex justify-center items-center min-h-screen scroll-auto'>
              <div className='bg-white rounded-2xl md:w-150 w-100'>
                {/* modal header */}
                <div className='bg-black text-white flex justify-between items-center p-3 text-xl'>
                  <h3>New Job Opening Form</h3>
                  <FontAwesomeIcon onClick={() => setModalStatus(false)} icon={faXmark} />
                </div>
                {/* modal body */}
                <div className=' relative  p-5'>
                  <div className='mb-3 '>
                    <input value={newJob.title} onChange={e => setNewJob({ ...newJob, title: e.target.value })} type="text" placeholder='Job Title' className='w-full p-2 border rounded placeholder-gray-400 text-black' />
                  </div>
                  <div className='mb-3 '>
                    <input value={newJob.location} onChange={e => setNewJob({ ...newJob, location: e.target.value })} type="text" placeholder='Job Location' className='w-full p-2 border rounded placeholder-gray-400 text-black' />
                  </div>
                  <div className='mb-3 '>
                    <input value={newJob.jobType} onChange={e => setNewJob({ ...newJob, jobType: e.target.value })} type="text" placeholder='Job type' className='w-full p-2 border rounded placeholder-gray-400 text-black' />
                  </div>
                  <div className='mb-3 '>
                    <input value={newJob.salary} onChange={e => setNewJob({ ...newJob, salary: e.target.value })} type="text" placeholder='Salary' className='w-full p-2 border rounded placeholder-gray-400 text-black' />
                  </div>
                  <div className='mb-3 '>
                    <input value={newJob.qualification} onChange={e => setNewJob({ ...newJob, qualification: e.target.value })} type="text" placeholder='Qualification' className='w-full p-2 border rounded placeholder-gray-400 text-black' />
                  </div>
                  <div className='mb-3 '>
                    <input value={newJob.experience} onChange={e => setNewJob({ ...newJob, experience: e.target.value })} type="text" placeholder='Experience' className='w-full p-2 border rounded placeholder-gray-400 text-black' />
                  </div>
                  <div className='mb-3 col-span-2'>
                    <textarea value={newJob.description} onChange={e => setNewJob({ ...newJob, description: e.target.value })} placeholder='Description' name="" id="" className='w-full p-2 border rounded placeholder-gray-400 text-black'></textarea>
                  </div>
                </div>
                {/* modal footer */}
                <div className='bg-gray-200 p-3 w-full flex justify-end '>
                  <button onClick={handleReset} className='py-2 px-3 rounded bg-gray-600 text-white '>Reset</button>
                  <button onClick={handleAddJob} className='py-2 px-3 rounded bg-blue-600 text-white ms-3'>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />
    </div>
  )
}

export default AddJob