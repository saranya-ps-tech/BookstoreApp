import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import {  getAllUsersAPI, listAllBooksAPI, updateBookStatusAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'





const ResourceAdmin = () => {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [userBooks,setUserBooks] = useState([])
  //const [token, setToken] = useState("")
  const [updateBookStatus, setUpdateBookStatus] = useState({})


  console.log(allUsers);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      //setToken(token)
      if (bookListStatus == true) {

        getAllBooks(token)
      } else if (usersListStatus == true) {
        getAllUsers(token)
      } else {
        console.log("Something went wrong!!!");
      }
    }
  }, [usersListStatus, updateBookStatus])


  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setAllUsers(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAllBooks = async (userToken)=>{
    const reqHeader = {
        "Authorization": `Bearer ${userToken}`
    }
    try{
        const result = await listAllBooksAPI(reqHeader)
        if(result.status==200){
            setUserBooks(result.data)
        }else{
            console.log(result);
        }
    }catch(err){
        console.log(err);
    }
}



  const approveBook = async (book) => {
    const userToken = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await updateBookStatusAPI(book, reqHeader)
      setUpdateBookStatus(result.data)
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 ">
          <div className="p-10">
            <h1 className="text-3xl text-center font-bold">All Collections</h1>
          </div>
          {/* tabs */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => { setBookListStatus(true); setUsersListStatus(false); }} className={bookListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Books</p>
            <p onClick={() => { setUsersListStatus(true); setBookListStatus(false); }} className={usersListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Users</p>
          </div>
          {/* contents */}
          {
            bookListStatus &&
            <div className="md:grid grid-cols-4 w-full my-5">
              {/* duplicate card */}
              {
                userBooks?.length > 0 ?
                  userBooks?.map(book => (
                    <div key={book?._id} className="shadow rounded p-3 m-4">
                      <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="book" />
                      <div className="flex flex-col justify-center items-center mt-4">
                        <p className="text-blue-700 font-bold text-lg">{book?.author}</p>
                        <p>{book?.title}</p>
                        <p>${book?.discountPrice}</p>
                        {
                          book?.status == "pending" &&
                          <button onClick={() => approveBook(book)} className="p-3 rounded border bg-green-700 w-full text-white hover:border-green-600 hover:bg-white hover:text-green-700">Approve</button>


                        }

                        {
                          book?.status == "approved" &&
                          <div className="flex justify-end w-full">
                            <img width={'40px'} height={'40px'} src="https://static.vecteezy.com/system/resources/previews/017/177/791/original/round-check-mark-symbol-with-transparent-background-free-png.png" alt="tick mark" />
                          </div>
                        }

                      </div>
                    </div>
                  ))
                  :
                  <div>No Books Added yet...</div>
              }
            </div>
          }

          {
            usersListStatus &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate card */}
              {
                allUsers?.length > 0 ?
                  allUsers?.map((user, index) => (
                    <div key={index} className='shadow  rounded p-2 m-2 bg-gray-200'>
                      <p className='text-red-700 font-bold text-md'>ID:{user?._id}</p>
                      <div className='flex  items-center mt-3'>
                        <img width={'100px'} height={'100px'} style={{ borderRadius: '50%' }} src={user?.profile ? `${SERVERURL}/uploads/${user?.profile}` : "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg"} alt="user" />
                        <div className='flex flex-col ml-3 w-full'>
                          <p className='text-blue-800 text-lg font-bold'>{user?.username}</p>
                          <p>{user?.email}</p>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <div>No Users</div>
              }
            </div>

          }

        </div>

      </div>
      <Footer />
    </>
  )
}

export default ResourceAdmin