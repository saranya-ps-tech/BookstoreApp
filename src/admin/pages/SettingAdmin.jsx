import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const SettingAdmin = () => {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          <h1 className="text-2xl font-bold text-center my-10">Settings</h1>
          <div className="md:grid grid-cols-2 gap-5 m-5">
            <div>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat ipsam inventore sunt ad modi ratione neque odit obcaecati a. Quas ea corrupti a. Vitae deserunt aperiam enim quisquam eius? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quibusdam magni vero, beatae quasi accusamus a asperiores dolore hic laudantium est earum facilis fugiat labore, consequatur itaque sint corporis eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam molestiae nesciunt praesentium dignissimos. Aperiam molestiae ipsam illum asperiores totam dolores. Exercitationem sunt nisi ullam dolor aliquid enim incidunt sequi excepturi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id consectetur, delectus voluptaiis optio natus.</p>

              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat ipsam inventore sunt ad modi ratione neque odit obcaecati a. Quas ea corrupti a. Vitae deserunt aperiam enim quisquam eius? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quibusdam magni vero, beatae quasi accusamus a asperiores dolore hic laudantium est earum facilis fugiat labore, consequatur itaque sint corporis eum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam molestiae nesciunt praesentium dignissimos. Aperiam molestiae ipsam illum asperiores totam dolores. Exercitationem sunt nisi ullam dolor aliquid enim incidunt sequi excepturi!</p>
            </div>
            <div className="rounded bg-blue-100 p-5 flex justify-center items-center flex-col mt-10 md:mt-0">
              <input type="file" name="" id="adminPic" className="hidden" />

              <label htmlFor="adminPic" className='mb-3'>
                <img
                  style={{ width: '200px', height: '200px', borderRadius: '50%' }}
                  src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg"
                  alt="admin profile"
                />
                <FontAwesomeIcon icon={faPen} style={{ marginLeft: '140px', marginTop: '-100px' }}
                  className="bg-yellow-400 p-2 text-white rounded" />
                <div className="mb-3 w-full">
                  <input type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Username" />
                </div>
                <div className="mb-3 w-full">
                  <input type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder=" Password" />
                </div>
                <div className="mb-3 w-full">
                  <input type="text" className="p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600" placeholder="Confirm Password" />
                </div>
                <div className="mb-5 flex justify-between">
                  <button className="bg-orange-600 text-white p-2 rounded">RESET</button>
                  <button className="bg-green-900 text-white p-2 rounded">UPDATE</button>
                </div>

              </label>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default SettingAdmin
