import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { addApplicationAPI, getAllJobAPI } from "../../services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Careers = () => {

  const navigate = useNavigate()

  const [jobTitle, setJobTitle] = useState("")
  const [jobId, setJobId] = useState("")
  const [modalStatus, setModalStatus] = useState(false);
  const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [applicationDetails, setApplicationDetails] = useState({
    fullname: "", email: "", qualification: "", phone: "", coverLetter: "", resume: ""
  })
  //reset resume input tag
  const [fileKey, setFileKey] = useState(Date.now())
  console.log(applicationDetails);


  useEffect(() => {
    getAlljobs()

  }, [searchKey])

  const handleReset = () => {
    setApplicationDetails({
      fullname: "", email: "", qualification: "", phone: "", coverLetter: "", resume: ""
    })
    setFileKey(Date.now())
  }


  const getAlljobs = async () => {
    try {
      const result = await getAllJobAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmitApplication = async () => {
    const token = sessionStorage.getItem("token")
    const { fullname, email, qualification, phone, coverLetter, resume } = applicationDetails
    if (!token) {
      toast.info("Please login to apply job!!!")
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    } else if (!fullname || !email || !qualification || !phone || !coverLetter || !resume || !jobId || !jobTitle) {
      toast.info("Please fill the form completely!!!!")
    } else {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      for (let key in applicationDetails) {
        reqBody.append(key, applicationDetails[key])
      }
      reqBody.append("jobTitle", jobTitle)
      reqBody.append("jobId", jobId)
      const result = await addApplicationAPI(reqBody, reqHeader)
      console.log(result);
      if (result.status == 200) {
        toast.success("Application submitted successfully!!!")
        handleReset()
        setModalStatus(false)
      } else if (result.status == 409) {
        toast.warning(result.response.data)
        handleReset()
      } else {
        toast.error("Something went wrong")
        handleReset()
        setModalStatus(false)
      }

    }
  }

  const handleApplyJob = (job) => {
  setJobId(job._id)
  setJobTitle(job.title)
  setModalStatus(true)
}




  return (
    <>
      <Header />
      <div className="md:px-40 p-5">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold mb-5">Careers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum
            eligendi blanditiis! Ipsa dolor a sed quibusdam consequuntur maxime
            sint, quidem, velit a veniam blanditiis quis facilis odit, harum.
          </p>
        </div>

        <div className="my-10">
          <h1 className="text-2xl font-bold">Current openings</h1>

          <div className="flex my-10 justify-center items-center">
            <input onChange={e => setSearchKey(e.target.value)}
              type="text"
              className="p-2 border border-gray-200 text-black w-full placeholder-gray-600"
              placeholder="Job Title"
            />
            <button className="bg-green-900 text-white p-2">Search</button>
          </div>

          {/* Job Opening */}
          {
            allJobs?.length > 0 ?
              allJobs.map((job) => (
                <div key={job?._id} className="border border-gray-200 p-5 shadow my-5">
                  <div className="flex mb-5 ">
                    <div className="w-full">
                      <h1 className="text-xl">{job.title}</h1>
                      <hr />
                    </div>
                    <button onClick={() => handleApplyJob(job)} className="bg-blue-900 text-white p-3 ms-5 flex items-center">
                      Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                    </button>
                  </div>

                  <p className="text-lg my-2"><FontAwesomeIcon icon={faLocationDot} /> {job?.location}</p>
                  <p className="text-lg my-2">Job Type : {job?.jobType}</p>
                  <p className="text-lg my-2">Salary : {job?.salary}</p>
                  <p className="text-lg my-2">Qualification : {job?.qualification}</p>
                  <p className="text-lg my-2">Experience : {job?.experience}</p>
                  <p className="text-lg my-2">Description : {job?.description}</p>

                </div>
              ))
              :
              <p>No current Job openings....</p>

          }
        </div>
      </div>

      {/* Modal */}
      {modalStatus && (
        <div
          className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50"
          onClick={() => setModalStatus(false)}
        >
          <div
            className="bg-white rounded-2xl w-[600px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-black text-white flex justify-between items-center p-3 text-xl">
              <h3>Application Form</h3>
              <button onClick={() => setModalStatus(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Modal content */}
            <div className="relative p-5">
              <div className="grid grid-cols-2 gap-x-5">
                <div className="mb-3">
                  <input value={applicationDetails?.fullname} onChange={e => setApplicationDetails({ ...applicationDetails, fullname: e.target.value })}
                    type="text"
                    placeholder="Full name"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3">
                  <input value={applicationDetails?.qualification} onChange={e => setApplicationDetails({ ...applicationDetails, qualification: e.target.value })}
                    type="text"
                    placeholder="Qualification"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3">
                  <input value={applicationDetails?.email} onChange={e => setApplicationDetails({ ...applicationDetails, email: e.target.value })}
                    type="text"
                    placeholder="Email Id"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3">
                  <input value={applicationDetails?.phone} onChange={e => setApplicationDetails({ ...applicationDetails, phone: e.target.value })}
                    type="text"
                    placeholder="Phone"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3 col-span-2">
                  <textarea value={applicationDetails?.coverLetter} onChange={e => setApplicationDetails({ ...applicationDetails, coverLetter: e.target.value })}
                    placeholder="Cover Letter"
                    className="w-full p-2 border rounded placeholder-gray-400 text-black"
                  ></textarea>
                </div>
                <div className="mb-3 col-span-2 flex flex-col text-gray-400">
                  <label>Resume</label>
                  <input key={fileKey} onChange={e => setApplicationDetails({ ...applicationDetails, resume: e.target.files[0] })}
                    type="file"
                    className="w-full border rounded file:p-2 file:bg-gray-400 file:text-white"
                  />
                </div>
              </div>

              {/* Modal footer */}
              <div className="bg-gray-200 p-3 w-full flex justify-end">
                <button onClick={handleReset} className="py-2 px-3 rounded bg-gray-600 text-white">
                  Reset
                </button>
                <button onClick={handleSubmitApplication} className="py-2 px-3 rounded bg-blue-600 text-white ms-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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

      <Footer />
    </>
  );
};

export default Careers;
