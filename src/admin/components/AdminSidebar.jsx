import { faBook, faGear, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SERVERURL from '../../services/serverURL'
import { adminUpdateContext } from '../../contextAPI/ContextShare'



const AdminSideBar = () => {

  const { adminEditResponse, setAdminEditResponse } = useContext(adminUpdateContext)
  const [dp, setDp] = useState("")
  const [adminName, setAdminName] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.profile)
      setAdminName(user.username)
    }
  }, [adminEditResponse])


  return (
    <div className=' bg-blue-100 h-screen flex justify-center items-center flex-col py-10'>

      <div className='flex justify-center'><img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={dp == "" ? "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" : `${SERVERURL}/uploads/${dp}`} alt="admin profile" /></div>
      <h1 className="text-xl fontbold my-5">{adminName}</h1>
      
      <div className='md:left-text mx-auto mt-10' >
        <div className="mt-3">

          <Link to={'/admin-dashboard'}> <FontAwesomeIcon icon={faHome} /> Home</Link>

        </div>
        <div className="mt-3">

          <Link to={'/admin-resources'}> <FontAwesomeIcon icon={faBook} /> Collections</Link>

        </div>
        <div className="mt-3">

          <Link to={'/admin-careers'}> <FontAwesomeIcon icon={faGraduationCap} /> careers</Link>

        </div>
        <div className="mt-3">

          <Link to={'/admin-settings'}> <FontAwesomeIcon icon={faGear} /> Settings</Link>

        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
