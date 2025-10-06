import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faXmark, faBackward } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'




const ViewBooks = () => {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='md:m-10 m-5'>
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className='w-full' src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
            </div>
            <div className="col-span-3">
              <div className='flex justify-between'>
                <h1 className="text-xl font-bold">Title</h1>
                <button className='text-gray-400' onClick={() => setModalStatus(true)}><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <p className='my-3 text-blue-700'>- Author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : demo</p>
                <p className="font-bold">Language : demo</p>
                <p className="font-bold">No. of Pages : demo</p>
                <p className="font-bold">Seller Mail : demo</p>
                <p className="font-bold">Real Price : demo</p>
                <p className="font-bold">ISBN : demo</p>
              </div>

              <div className="md:my-10 my-4">
                <p className="font-bold text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vitae provident quia maiores aut sapiente porro harum, possimus cumque dolorem non optio laboriosam iusto maxime corrupti repellat nulla voluptatem. Dolor!</p>
              </div>

              <div className="flex justify-end">
                <Link to={'/all-books'} className="bg-blue-900 text-white p-2 rounded"><FontAwesomeIcon icon={faBackward} className="me-3" />Back</Link>
                <button className="bg-green-900 text-white p-2 ms-5 rounded">Buy $ 123</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      {modalStatus && (
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
                    <img width={'250px'} height={'250px'} src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" alt="book image" className='mx-2 my-3' />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default ViewBooks