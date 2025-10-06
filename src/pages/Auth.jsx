import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'


function Auth({ register }) {
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' })

//console.log(userDetails);

 const handleRegister=()=>{
  console.log("inside handle register");
  const{username,email,password}=userDetails

  if(!username || !email|| !password){
    toast.info("Please fill the form completely")
  }else{
    toast.success("Proceed to API call")
  }
  
 }
  
  return (
    
      <div className='flex flex-col justify-center items-center bg-[url("/loginbg.jpg")] bg-cover bg-center min-h-screen'>
        <div className='p-10 md:w-[30rem]'>
          <h1 className='text-3xl font-bold text-center'>BOOK STORE</h1>
          <div className='bg-black text-white p-5 flex flex-col justify-center items-center my-5 w-full'>
            <div style={{ width: '40px', height: '50px', borderRadius: '50%' }} className='border flex justify-center items-center mt-3'>
              <FontAwesomeIcon icon={faUser} size='2xl' />
            </div>
            <h1 className='text-xl mt-3'>{register ? "Register" : "Login"}</h1>
            <div className='mt-4 w-full p-2'>
              {
                register &&
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className='border w-full px-3 py-1 mb-4 placeholder-gray-400 rounded bg-white text-black' placeholder='Username' />

              }
              <input value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} type="text" className='border w-full px-3 py-1 mb-4 placeholder-gray-400 rounded bg-white text-black' placeholder='Email Id' />
              <div className='flex items-center '>
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPasswordStatus ? "text" : "password"} className='border w-full px-3 py-1 mb-3 placeholder-gray-400 rounded bg-white text-black' placeholder='Password' />
                {!viewPasswordStatus ?
                  <FontAwesomeIcon icon={faEye} style={{ marginLeft: '-30px' }} className='text-gray-400 cursor-pointer' onClick={() => setViewPasswordStatus(!viewPasswordStatus)} />
                  :
                  <FontAwesomeIcon icon={faEyeSlash} style={{ marginLeft: '-30px' }} className='text-gray-400 cursor-pointer' onClick={() => setViewPasswordStatus(!viewPasswordStatus)} />
                }
              </div>
              <div className='flex justify-between mt-1'>
                <p className='text-xs text-yellow-400'>*Never share the password with others</p>

                {!register && <p className='text-xs underline'>Forget Password</p>}

              </div>

              {
                register ?

                  <button type='button' onClick={handleRegister} className='w-full bg-green-700 font-bold rounded py-2 mt-6'>Register</button>

                  :
                  <button className='w-full bg-green-700 font-bold rounded py-2 mt-6'>Login</button>

              }

              {/* google authentication */}

              <div className='text-center mt-15 text-sm mb-6'>

                {
                  register ?
                    <p>Are you a Already User?<Link to={'/login'} className='underline ms-2 text-sky-500'>Login</Link></p>
                    :
                    <p>Are you a New User?<Link to={'/register'} className='underline ms-2 text-sky-500'>Register</Link></p>
                }
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

      </div>

  
  )
}

export default Auth