import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { Link } from 'react-router-dom'


const CareerAdmin = () => {
  const [jobListStatus, setJobListStatus] = useState(true)
  const [listApplicationStatus, setListApplicationStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSideBar />
        </div>
        <div className="col-span-4">
          <div className="col-span-4 ">
            <div className="p-10">
              <h1 className="text-3xl text-center font-bold">Careers</h1>
            </div>
            {/* tabs */}
            <div className="flex justify-center items-center my-8 font-medium text-lg">
              <p onClick={() => { setJobListStatus(true); setListApplicationStatus(false); }} className={jobListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Job</p>
              <p onClick={() => { setListApplicationStatus(true); setJobListStatus(false); }} className={listApplicationStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>View Applications</p>
            </div>
            {/* contents */}
            {
              jobListStatus &&
              <div>job lst</div>
            }
            {
              listApplicationStatus &&
              <div className='p-10 overflow-x-hidden'>
                <table className='w-full my-3 shadow'>
                  <thead>
                    <tr>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Sl No.</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>E Mail</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover</th>
                      <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-500 p-3 text-center">1</td>
                      <td className="border border-gray-500 p-3 text-center">Front ENd Developer</td>
                      <td className="border border-gray-500 p-3 text-center">Max Miller</td>
                      <td className="border border-gray-500 p-3 text-center">BCA</td>
                      <td className="border border-gray-500 p-3 text-center">max@gmail.com</td>
                      <td className="border border-gray-500 p-3 text-center">9087654321</td>
                      <td className="border border-gray-500 p-3 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe
                        eligendi enim debitis qui deleniti voluptate quisquam inventore iure!
                        Omnis vitae eum harum ex perspiciatis inventore sed, eos magnam odit?
                      </td>
                      <td className="border border-gray-500 p-3 text-center">
                        <Link className="text-blue-600 underline">Resume</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }


          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default CareerAdmin