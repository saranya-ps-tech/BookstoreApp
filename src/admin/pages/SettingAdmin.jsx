import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import SERVERURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'
import { updateAdminProfileAPI } from '../../services/allAPI'
import { adminUpdateContext } from '../../contextAPI/ContextShare'



const SettingAdmin = () => {

  const { adminEditResponse, setAdminEditResponse } = useContext(adminUpdateContext)
  const [adminDetails, setAdminDetails] = useState({username: "", password: "", cPassword: "", profile: ""  })
  const [existingProfilePic, setExisitngProfilePic] = useState("")
  const [preview, setPreview] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({ ...adminDetails, username: user.username, password: user.password, cPassword: user.password })
      setExisitngProfilePic(user.profile)
    }
  }, [])

  const handleUploadProfilePic = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

  const handleReset = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setAdminDetails({ profile: "", username: user.username, password: user.password, cPassword: user.password })
    setExisitngProfilePic(user.profile)
    setPreview("")
  }

  const handleUpdateAdminProfile = async () => {
    const { username, password, profile, cPassword } = adminDetails
    if (!username || !password || !cPassword) {
      toast.info("Please fill the form completely!!!")
    } else if (password != cPassword) {
      toast.warning("Password & confirm password must be be same")
      handleReset()
    } else {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("password", password)
      reqBody.append("bio", "")
      preview ? reqBody.append("profile", profile) : reqBody.append("profile", existingProfilePic)

      try {
        const result = await updateAdminProfileAPI(reqBody, reqHeader)
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data))
          toast.success("Profile updation completed successfully!!!")
          setAdminEditResponse(result.data)
          handleReset()
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
          <h1 className="text-2xl font-bold text-center my-10">Settings</h1>
          <div className="md:grid grid-cols-2 gap-5 m-5">
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat ipsam inventore sunt ad modi ratione neque odit obcaecati a. Quas ea corrupti a. Vitae deserunt aperiam enim quisquam eius? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quibusdam magni vero, beatae quasi accusamus a asperiores dolore hic laudantium est earum facilis fugiat labore, consequatur itaque sint corporis eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam molestiae nesciunt praesentium dignissimos. Aperiam molestiae ipsam illum asperiores totam dolores. Exercitationem sunt nisi ullam dolor aliquid enim incidunt sequi excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur, delectus voluptaiis optio natus.</p>

              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat ipsam inventore sunt ad modi ratione neque odit obcaecati a. Quas ea corrupti a. Vitae deserunt aperiam enim quisquam eius? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quibusdam magni vero, beatae quasi accusamus a asperiores dolore hic laudantium est earum facilis fugiat labore, consequatur itaque sint corporis eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam molestiae nesciunt praesentium dignissimos. Aperiam molestiae ipsam illum asperiores totam dolores. Exercitationem sunt nisi ullam dolor aliquid enim incidunt sequi excepturi!</p>
            </div>
            <div className="rounded bg-blue-100 p-5 flex justify-center items-center flex-col mt-10 md:mt-0">
              <input onChange={e => handleUploadProfilePic(e)} type="file" name="" id="adminPic" className="hidden" />

              <label htmlFor="adminPic" className='mb-3'>
                {
                  existingProfilePic ?
                    <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={preview ? preview : `${SERVERURL}/uploads/${existingProfilePic}`} alt="admin profile" />
                    :
                    <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={preview ? preview : "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg"} alt="admin profile" />
                }
                <FontAwesomeIcon icon={faPen} style={{ marginLeft: '140px', marginTop: '-100px' }}
                  className="bg-yellow-400 p-2 text-white rounded" />
                <div className="mb-3 w-full">
                  <input value={adminDetails.username} onChange={e => setAdminDetails({ ...adminDetails, username: e.target.value })} type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Username" />
                </div>
                <div className="mb-3 w-full">
                  <input value={adminDetails.password} onChange={e => setAdminDetails({ ...adminDetails, password: e.target.value })} type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder=" Password" />
                </div>
                <div className="mb-3 w-full">
                  <input value={adminDetails.cPassword} onChange={e => setAdminDetails({ ...adminDetails, cPassword: e.target.value })} type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Confirm Password" />
                </div>
                <div className="mb-5 flex justify-between">
                  <button onClick={handleReset} className="bg-orange-600 text-white p-2 rounded">RESET</button>
                  <button onClick={handleUpdateAdminProfile} className="bg-green-900 text-white p-2 rounded">UPDATE</button>
                </div>

              </label>
            </div>

          </div>
        </div>

      </div>
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
  )
}

export default SettingAdmin
