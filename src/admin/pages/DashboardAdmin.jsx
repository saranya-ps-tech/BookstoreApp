import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'


const DashboardAdmin = () => {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4 p-10">
          <div className='md:grid grid-cols-3 gap-2'>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-blue-900 p-4 flex items-center rounded text-white text-5xl">
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center ms-10 md:ms-0'>
                  <h3 className="text-xl">Total Number of Books</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>

              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-green-900 p-4 flex items-center rounded text-white text-5xl">
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-center ms-10 md:ms-0'>
                  <h3 className="text-xl">Total Number of Users</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>

              </div>
            </div>

            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-yellow-600 p-4 flex items-center rounded text-white text-5xl">
                <FontAwesomeIcon icon={faUser} />
                <div className='text-center ms-10 md:ms-0'>
                  <h3 className="text-xl">Total Number of Employees</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>

              </div>
            </div>


          </div>
          <div className="md:grid grid-cols-2 p-5 my-5">
            <div className='my-5 md:my-0'>bar chart</div>
            <div className='my-5 md:my-0'>pie chart</div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default DashboardAdmin