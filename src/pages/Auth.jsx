import { faEye, faEyeSlash, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { loginAPI, registerAPI } from '../services/allAPI'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';



function Auth({ register }) {
  const navigate = useNavigate()
  const [viewPasswordStatus, setViewPasswordStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({ username: '', email: '', password: '' })

  //console.log(userDetails);

  const handleRegister = async () => {
    // console.log("inside handle register");
    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    } else {
      // toast.success("Proceed to API call")
      try {
        const result = await registerAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Register successfully!!! Please Login...")
          setUserDetails({ username: '', email: '', password: '' })
          navigate('/login')
        } else if (result.status == 409) {
          toast.warning(result.response.data)
          setUserDetails({ username: '', email: '', password: '' })
          navigate('/login')
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }

    }

  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please fill the form completely!!!")
    } else {
      // toast.success("Proceed to API Call")
      try {
        const result = await loginAPI(userDetails)
        console.log(result);
        if (result.status == 200) {
          toast.success("Login successfully!!!")
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setTimeout(() => {
            if (result.data.user.role == "admin") {
              navigate('/admin-dashboard')
            } else {
              navigate('/')
            }
          }, 2500);
        } else if (result.status == 401) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else if (result.status == 404) {
          toast.warning(result.response.data)
          setUserDetails({ username: "", email: "", password: "" })
        } else {
          toast.error("Something went wrong!!!")
          setUserDetails({ username: "", email: "", password: "" })
        }


      } catch (err) {
        console.log(err);
      }
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
                <button onClick={handleLogin} className='w-full bg-green-700 font-bold rounded py-2 mt-6'>Login</button>

            }

            {/* google authentication */}

            <div className="my-5 text-center">
              {!register && <p>----------------------or------------------------</p>}
              {!register && (
                <div className="my-5 flex justify-center w-full">
                  <GoogleOAuthProvider clientId="304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </GoogleOAuthProvider>
                </div>
              )}
            </div>


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