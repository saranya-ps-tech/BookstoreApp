import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from 'react';
import { getAllBooksAPI } from '../../services/allAPI';
import { toast, ToastContainer } from 'react-toastify';
import { searchBookContext } from '../../contextAPI/ContextShare';



const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false);
  const [token, setToken] = useState("")
  const [books, setBooks] = useState([])
  const [tempBooks, setTempBooks] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const {searchKey,setSearchKey}=useContext(searchBookContext)


  //console.log(books);
  //console.log(allCategories);



  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getAllBooks(userToken)
    }
  }, [searchKey])


  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllBooksAPI(searchKey,reqHeader)
      if (result.status === 200) {
        setBooks(result.data)
        setTempBooks(result.data)
        const tempCategory = result.data.map(item => item.category)
        // console.log(tempCategory);
        const tempArray = [...new Set(tempCategory)]
        // console.log(tempArray);
        setAllCategories(tempArray)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  // filtering according to book category
const filterBooks = (category)=>{
  if(category==="No-Filter"){
    setBooks(tempBooks)
  }else{
    setBooks(tempBooks?.filter(item=>item.category.toLowerCase()===category.toLowerCase()))
  }
}



  return (
    <>
      <Header />
      {token ?
        <>
          <div className="flex justify-center items-center flex-col my-5">
            <h1 className='text-3xl font-bold my-5'>Collections</h1>
            <div className="flex my-5">
              <input value={searchKey}
                type="text"
                className='p-2 rounded border border-gray-400 text-black w-full placeholder-gray-600'
                placeholder='Search By Title' onChange={e=>setSearchKey(e.target.value)}
              />
              <button className='bg-blue-600 text-white p-2'>Search</button>
            </div>
          </div>

          {/* grid */}
          <div className="md:grid grid-cols-4 md:px-20 p-5">

            {/* filter */}
            <div className="col-span-1">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Filter</h1>
                <button
                  onClick={() => setListStatus(!listStatus)}
                  className="text-2xl md:hidden"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>

              <div className={listStatus ? 'block' : 'md:block hidden'}>
                {

                  allCategories?.length>0 &&
                  allCategories?.map((category, index) => (
                    <div key={index} className="mt-3">
                      <input type="radio" id={category} name="filter" onClick={() => filterBooks(category)} />
                      <label className="ms-3" htmlFor={category}>
                        {category}
                      </label>
                    </div>
                  ))

                }

                <div className="mt-3">
                  <input type="radio" id="noFilter" name="filter" onClick={() => filterBooks("No-Filter")} />
                  <label className="ms-3" htmlFor="noFilter">
                    No-Filter
                  </label>
                </div>
              </div>
            </div>

            {/* books */}
            <div className='col-span-3'>
              <div className='md:grid grid-cols-4 mt-5 md:mt-0 gap-5'>
                {books.length > 0 ?
                  books?.map((book) => (
                    <div key={book?._id} className="shadow rounded p-3 mx-4 my-3" hidden={book?.status=='pending' || book?.status=='sold'}>
                      <img
                        width={"100%"}
                        height={"300px"}
                        src={book?.imageUrl}
                        alt="book"
                      />
                      <div className="flex flex-col justify-center items-center mt-4">
                        <p className="text-blue-700 font-bold text-lg">{book?.author.slice(0, 20)}</p>
                        <p>{book?.title.slice(0, 20)}</p>
                        <Link to={`/books/${book?._id}/view`} className="bg-blue-800 p-2 text-white">View Book</Link>
                      </div>
                    </div>
                  ))
                  :
                  <p>No Books</p>
                }

              </div>
            </div>
          </div>

        </>
        :
        <div className="my-10 flex justify-center items-center flex-col ">
          <img className="w-50" src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="lock" />
          <p className="font-semibold text-xl mb-10">Please <Link to={'/login'} className="text-blue-700 font-bold underline">Login</Link> To Explore More....</p>
        </div>

      }
      <Footer />
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
    </>
  )
}

export default AllBooks
