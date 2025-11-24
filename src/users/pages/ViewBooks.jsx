import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faXmark, faBackward } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-regular-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { getSingleBookAPI, makePaymentAPI } from '../../services/allAPI'
import SERVERURL from '../../services/serverURL'
import { loadStripe } from '@stripe/stripe-js';





const ViewBooks = () => {
  const [modalStatus, setModalStatus] = useState(false)

  const { id } = useParams()
  const [book, setBook] = useState({})

  console.log(book);

  useEffect(() => {
    viewBookDetails()
  }, [])


  const viewBookDetails = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getSingleBookAPI(id,
          reqHeader)
        if (result.status == 200) {
          setBook(result.data)
        } else if (result.response.status == 401) {
          toast.warning(result.response.data)
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const handlePayment = async () => {
    console.log("Inisde handlePayment");
    //stripe object
    const stripe = await loadStripe('pk_test_51SRFUUCqXH3wXOaA4uUkrDe6DuyyrgPOd2hgvl6wCHVUQ0x5c9xa8Qj2UAFZnM1MWijnzCSPrrFmmSCf9dVVTkIx00FJNjjEXW');
    // console.log(stripe);
    // reqBody - book, reqHeader - token
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await makePaymentAPI(book, reqHeader)
        console.log(result);
        const checkoutSessionURL = result.data.checkoutSessionURL
        if (checkoutSessionURL) {
          //redirect
          window.location.href = checkoutSessionURL
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className='w-full' src={book?.imageUrl} alt="book" />
            </div>
            <div className="col-span-3">
              <div className='flex justify-between'>
                <h1 className="text-xl font-bold">{book?.title}</h1>
                <button className='text-gray-400' onClick={() => setModalStatus(true)}><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className="my-3 text-blue-700"> -{book?.author}</p>

              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : {book?.publisher}</p>
                <p className="font-bold">Language : {book?.language}</p>
                <p className="font-bold">No. of Pages : {book?.noOfPages}</p>
                <p className="font-bold">Seller Mail : {book?.userMail}</p>
                <p className="font-bold">Real Price : ${book?.price}</p>
                <p className="font-bold">ISBN : {book?.isbn}</p>
                <p className="font-bold">Category: {book?.category}</p>

              </div>

              <div className="md:my-10 my-4">
                <p className="font-bold text-lg"> {book?.abstract}</p>
              </div>

              <div className="flex justify-end">
                <Link to={'/all-books'} className="bg-blue-900 text-white p-2 rounded"><FontAwesomeIcon icon=
                  {faBackward} className='me-3' />Back</Link>
                <button onClick={handlePayment} className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ {book?.discountPrice}</button>

              </div>
            </div>
          </div>
        </div>
      </div >

      {/* modal */}
      {
        modalStatus && (
          <div className='relative z-10 overflow-y-auto ' onClick={() => setModalStatus(false)}>
            <div className='bg-gray-500/75 fixed inset-0 transition-opacity'>
              <div className='flex justify-center items-center min-h-100 rounded'>
                <div className='bg-white rounded-2xl md:w-250 w-100'>
                  <div className='bg-black text-white flex justify-between items-center p-3'>
                    <h1>Books Images</h1>
                    <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />
                  </div>
                  <div className='ml-5 my-5'>
                    <p className='text-blue-600 ml-5 my-5'>
                      <FontAwesomeIcon icon={faCamera} className='me-2' />
                      Camera click of the book in the hand of seller</p>
                    <div className='md:flex flex-wrap my-5'>
                      { /* duplicate images */}
                      {
                        book?.uploadImg?.length > 0 ?
                          book?.uploadImg?.map(img => (
                            <img width={'250px'} height={'250px'} className='mx-2 md:mb-0 mb-2' src={`${SERVERURL}/uploads/${img}`} alt="book images" />
                          ))
                          :
                          <p>User uploaded book images are unavailable</p>
                      }


                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )
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

export default ViewBooks