import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

const AllBooks = () => {
  const [listStatus, setListStatus] = useState(false);

  return (
    <>
      <Header />
      
      <div className="flex justify-center items-center flex-col my-5">
        <h1 className='text-3xl'>Collections</h1>
        <div className="flex my-5">
          <input 
            type="text" 
            className='p-2 rounded border border-gray-400 text-black w-full placeholder-gray-600' 
            placeholder='Search By Title' 
          />
          <button className='bg-blue-600 text-white p-2'>Search</button>
        </div>
      </div>

      {/* grid */}
      <div className="md:grid grid-cols-4 md:px-20 p-5 mb-10">
        
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
            <div className="mt-3">
              <input type="radio" id="Literary" name="filter" />
              <label className="ms-3" htmlFor="Literary">Literary Fiction</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Philosophy" name="filter" />
              <label className="ms-3" htmlFor="Philosophy">Philosophy</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Romance" name="filter" />
              <label className="ms-3" htmlFor="Romance">Romance</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Thriller" name="filter" />
              <label className="ms-3" htmlFor="Thriller">Mystery/Thriller</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Horror" name="filter" />
              <label className="ms-3" htmlFor="Horror">Horror</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Biography" name="filter" />
              <label className="ms-3" htmlFor="Biography">Auto/Biography</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Self-Help" name="filter" />
              <label className="ms-3" htmlFor="Self-Help">Self-Help</label>
            </div>
            <div className="mt-3">
              <input type="radio" id="Politics" name="filter" />
              <label className="ms-3" htmlFor="Politics">Politics</label>
            </div>
          </div>
        </div>

        {/* books */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5 md:mt-0 gap-5'>
            <div className='shadow p-3 rounded'>
              <img 
                width={'100%'} 
                height={'300px'} 
                src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" 
                alt="book" 
              />
              <div className='flex flex-col justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <Link to={'/books/id/view'} className='bg-blue-600 text-white px-2'>View Book</Link>
              </div>
            </div>

            <div className='shadow p-3 rounded'>
              <img 
                width={'100%'} 
                height={'300px'} 
                src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" 
                alt="book" 
              />
              <div className='flex flex-col justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <Link to={'/books/id/view'} className='bg-blue-600 text-white px-2'>View Book</Link>
              </div>
            </div>

            <div className='shadow p-3 rounded'>
              <img 
                width={'100%'} 
                height={'300px'} 
                src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" 
                alt="book" 
              />
              <div className='flex flex-col justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <Link to={'/books/id/view'} className='bg-blue-600 text-white px-2'>View Book</Link>
              </div>
            </div>

            <div className='shadow p-3 rounded'>
              <img 
                width={'100%'} 
                height={'300px'} 
                src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" 
                alt="book" 
              />
              <div className='flex flex-col justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <Link to={'/books/id/view'} className='bg-blue-600 text-white px-2'>View Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AllBooks
