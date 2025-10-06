import { faBook, faGear, faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div className=' bg-blue-100 h-screen flex justify-center items-center flex-col py-10'>
      <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Clip-Art-Transparent-PNG.png" alt="admin profile" />
      <h1 className="text-xl fontbold my-5">Admin Name</h1>
      <div className='md:left-text mx-auto mt-10' >
        <div className="mt-3">
      
           <Link to={'/admin-dashboard'}> <FontAwesomeIcon icon={faHome}/> Home</Link>
          
        </div>
        <div className="mt-3">
      
           <Link to={'/admin-resources'}> <FontAwesomeIcon icon={faBook}/> Collections</Link>
          
        </div>
        <div className="mt-3">
      
           <Link to={'/admin-careers'}> <FontAwesomeIcon icon={faGraduationCap}/> careers</Link>
          
        </div>
       <div className="mt-3">
      
           <Link to={'/admin-settings'}> <FontAwesomeIcon icon={faGear}/> Settings</Link>
          
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
