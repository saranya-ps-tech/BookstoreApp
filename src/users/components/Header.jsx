import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faAddressCard, faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import SERVERURL from '../../services/serverURL';
import { userUpdateContext } from '../../contextAPI/ContextShare';
import { userAuthContext } from '../../contextAPI/AuthContext';


const Header = () => {

  const { role, authorisedUser, setAuthorisedUser } = useContext(userAuthContext)
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropDownStatus, setDropDownStatus] = useState(false)
  const navigate = useNavigate()
  const { userEditResponse } = useContext(userUpdateContext)

  //console.log(userDp);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }
  }, [token, userEditResponse])
  const logout = () => {
    sessionStorage.clear()
    setAuthorisedUser(false)
    setToken("")
    setUserDp("")
    setDropDownStatus(false)
    navigate('/')
  }



  return (
    <>
      <div className='grid grid-cols-3 p-3'>
        {/* logo */}
        <div className='flex items-center'>
          <img width={'50px'} height={'50px'} src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png" alt="logo" />
          <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
        </div>
        {/* title */}
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-3xl font-bold'>BOOK STORE</h1>
        </div>
        {/* login */}
        <div className='md:flex justify-end items-center hidden'>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          {/* login link */}
          {!token ? <Link to={'/login'}>
            <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
              <FontAwesomeIcon icon={faUser} className='me-2' /> Login
            </button>
          </Link> :
            <div className="relative inline-block text-left ">
              <button onClick={() => setDropDownStatus(!dropDownStatus)} className="w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50 ">
                <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} className="mx-2" src={userDp == "" ? "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png" : userDp.startsWith("https://lh3.googleusercontent.com/") ? userDp : `${SERVERURL}/uploads/${userDp}`} alt="user" />
              </button>
              {dropDownStatus && <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                <div className="py-1">
                  <Link className="block px-4 py-2 text-sm text-gray-700" to={'/profile'}> <FontAwesomeIcon icon={faAddressCard} className="me-2" /> Profile </Link>
                  <button onClick={logout} className="block px-4 py-2 text-sm text-gray-700"><FontAwesomeIcon icon={faPowerOff} className="me-2" /> Logout</button>
                </div>
              </div>}
            </div>

          }

        </div>
      </div>
      <nav className='w-full p-3 text-white bg-black md:flex justify-center items-center'>
        {/* menubar & login */}
        <div className="flex justify-between items-center text-2xl md:hidden w-full px-2">

          {/* Menu Button */}
          <button onClick={() => setListStatus(!listStatus)}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Login Button */}
          <Link to={"/login"}>
            <button
              className="
        border border-black rounded px-3 py-2 
        hover:bg-black hover:text-white
        flex items-center gap-2
        text-sm
      "
            >
              {/* icon always visible */}
              <FontAwesomeIcon icon={faUser} />

              {/* Login text hidden on very small screens */}
              <span className="hidden xs:inline">Login</span>
            </button>
          </Link>

        </div>


        <ul className={listStatus ? "flex flex-col" : 'md:flex justify-center items-center hidden'}>
          <li className='md:mx-4 mt-3 md:mt-0'> <Link to={'/'} >HOME</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'> <Link to={'/all-books'}>BOOKS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>CAREERS</Link></li>
          <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'} >CONTACT</Link></li>

        </ul>
      </nav>

    </>
  )
}

export default Header