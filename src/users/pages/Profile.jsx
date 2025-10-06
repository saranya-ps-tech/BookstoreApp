import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)

  return (
    <>
      <Header />

      <div style={{ height: '200px' }} className=" bg-black"></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className=" bg-white p-3">
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
      </div>
      <div className="md:flex justify-between  px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
          <FontAwesomeIcon className="text-blue-400 ms-3" icon={faCircleCheck} />
        </div>

        <div>Edit</div>

      </div>
      <div className="md:px-20 px-5 my-5 text-justify">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cumque excepturi ex delectus accusantium nemo, perspiciatis pariatur
        quo explicabo facilis sed blanditiis, ullam neque labore expedita qui itaque unde,
        repudiandae esse.
        Dignissimos, officia aut suscipit quo magni soluta commodi iste neque architecto,
        error, eaque exercitationem incidunt iure molestiae voluptatem quasi inventore culpa
        ipsam! Repellendus beatae adipisci cupiditate reiciendis non saepe fuga.</div>

      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-5 font-medium text-lg">
          <p onClick={() => { setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Books</p>
          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
        </div>
        {/* contents */}
        {/* sell books */}
        {
          sellBookStatus &&
          <div>
            <div className='p-10 my-20 mx-5 bg-gray-200'>
              <div className='text-center font-medium  text-3xl'> Book Details </div>
              <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="mb-3">
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Title' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>

                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Author' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>

                  <div className="mb-3 px-3">
                    <input type="text" placeholder='No of Pages' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>

                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Image URL' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>
                  <div className="mb-3 px-3">
                    <textarea placeholder="Abstract" name="" id="" rows={'5'} className="w-full p-2 rounded placeholder-gray-400 text-black bg-white"></textarea>
                  </div>



                </div>
                <div className="mb-3">
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Publisher' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Language' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='ISBN' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Category' className="w-full p-2 rounded text-black bg-white placeholder-gray-400" />
                  </div>
                  <div className="mb-3 flex justify-center items-center mt-10">
                    <label htmlFor="bookImage">
                      <input type="file" name="" id="bookImage" className='hidden' />
                      <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" width={'200px'} height={'200px'} alt="book image" />
                    </label>
                  </div>

                  {/* footer */}
                  <div className="p-3 w-full flex md:justify-end justify-center mt-8">
                    <button className="py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:border hover:text-black">Reset</button>
                    <button className="py-2 px-3 rounded bg-blue-600 text-white ms-3 hover:bg-white hover:border hover:text-blue">Submit</button>
                  </div>


                </div>

              </div>


            </div>
          </div>
        }

        {/* book status */}
        {
          bookStatus &&
          <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div according to book */}
            <div className='p-5 rounded mt-4 bg-gray-100'>
              <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className="text-xl">Author</h2>
                  <h3 className="text-lg text-blue-500">$ 300</h3>
                  <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos consequuntur, deleniti dolorum in tempora veritatis perferendis, facilis dolor blanditiis nobis atque sint architecto nam nostrum. Repellat iste atque quam.</p>
                  <div className="flex mt-3">
                    <img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending icon" />
                    <img width={'100px'} height={'100px'} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved icon" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className="w-full" src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                  <div className="mt-4 flex justify-end">
                    <button className="py-2 px-3 rounded bg-red-600 text-white ms-3 hover:bg-white hover:border hover:text-red-600 hover:border-red-600">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        {/* purchase history */}
        {
          purchaseStatus &&
          <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div according to book */}
            <div className='p-5 rounded mt-4 bg-gray-100'>
              <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className="text-xl">Author</h2>
                  <h3 className="text-lg text-blue-500">$ 300</h3>
                  <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos consequuntur, deleniti dolorum in tempora veritatis perferendis, facilis dolor blanditiis nobis atque sint architecto nam nostrum. Repellat iste atque quam.</p>
                  <div className="flex mt-3">
                    <img width={'150px'} height={'150px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-2.png" alt="sold icon" />

                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className="w-full" src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                  <div className="mt-4 flex justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>

        }
      </div>

      <Footer />
    </>
  )
}

export default Profile