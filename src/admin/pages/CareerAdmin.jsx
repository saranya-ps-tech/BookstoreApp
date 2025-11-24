import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddJob from '../components/AddJob'
import { getAllApplicationAPI, getAllJobAPI, removeJobAPI } from '../../services/allAPI'
import { jobContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverURL'




const CareerAdmin = () => {
  const { addJobResponse, setAddJobResponse } = useContext(jobContext)
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicationStatus, setListApplicationStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [deleteJobResponse, setDeleteJobResponse] = useState({})
  const [application, setApplication] = useState([])



  //console.log(allJobs);

  useEffect(() => {
    if (jobListStatus == true) {
      getAllJobs()
    } else if (listApplicationStatus == true) {
      getApplications()
    }
  }, [searchKey, deleteJobResponse, addJobResponse, listApplicationStatus])

  const getApplications = async () => {
    const token = sessionStorage.getItem("token")

    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      //api call
      const result = await getAllApplicationAPI(reqHeader)
      if (result.status == 200) {
        setApplication(result.data)
      } else {
        console.log(result);
      }
    }
  }


  const getAllJobs = async () => {
    try {
      const result = await getAllJobAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const removeJob = async (id) => {
    const token = sessionStorage.getItem("token")

    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await removeJobAPI(id, reqHeader)
        if (result.status == 200) {
          setDeleteJobResponse(result.data)
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }



  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          <div className="col-span-4 ">
            <div className="p-10">
              <h1 className="text-3xl text-center font-bold">Careers</h1>
            </div>
            {/* tabs */}
            <div className="flex justify-center items-center my-8 font-medium text-lg">
              <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false); }} className={jobListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Job</p>
              <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false); }} className={listApplicationStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>View Applications</p>
            </div>
            {/* tab content */}
            {
              jobListStatus &&
              <>
                <div className="flex justify-between items-center ">
                  <div className="flex  p-8 ">
                    <input onChange={e => setSearchKey(e.target.value)} type="text" className="px-2 py-1  text-black shadow w-full placeholder-gray-500 rounded border border-white placeholder:text-sm" placeholder='Job Title ' />
                    <button className="bg-blue-600 text-white p-2 ms-2 rounded">Search</button>
                  </div>
                  <AddJob />
                </div>
                {
                  allJobs?.length > 0 ?
                    allJobs?.map(job => (
                      <div key={job?._id} className="border border-gray-200 p-5 shadow my-5">
                        <div className="flex mb-5 ">
                          <div className='w-full'>
                            <h1 className="text-xl font-bold">{job?.title}</h1>
                            <hr />
                          </div>
                          <button onClick={() => removeJob(job?._id)} className="bg-red-900 text-white p-3 ms-5 flex items-center">Delete
                            <FontAwesomeIcon icon={faTrash} className="ms-2" />
                          </button>
                        </div>
                        <p className='text-lg text-blue-700 my-2'><FontAwesomeIcon icon={faLocationDot} /> {job?.location}</p>
                        <p className='text-lg my-2'>Job Type : {job?.jobType}</p>
                        <p className='text-lg my-2'>Salary : {job?.salary}</p>
                        <p className='text-lg my-2'>Qualification : {job?.qualification}</p>
                        <p className='text-lg my-2'>Experience : {job?.experience}</p>
                        <p className='text-lg my-2'>Description : {job?.description}</p>
                      </div>
                    ))
                    :
                    <div>No job openings...</div>
                }

              </>

            }
            {
              listApplicationStatus &&
              <div className='p-10 overflow-x-hidden'>
                <table className='w-full my-3 shadow'>
                  <thead>
                    <tr>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No.</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>E Mail</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      application?.length > 0 ?
                        application.map((item, index) => (
                          <tr key={item?._id}>
                            <td className="border border-gray-500 p-3 text-center">{index + 1}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.jobTitle}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.fullname}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.qualification}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.email}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.phone}</td>
                            <td className="border border-gray-500 p-3 text-center">{item?.coverLetter}</td>
                            <td className="border border-gray-500 p-3 text-center">
                              <Link className="text-blue-600 underline" to={`${SERVERURL}/pdf/${item?.resume}`} target="_blank">
                                Resume
                              </Link>
                            </td>
                          </tr>
                        ))
                        :
                        <tr><p>No Applications are available</p></tr>

                    }
                  </tbody>
                </table>
              </div>
            }


          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default CareerAdmin