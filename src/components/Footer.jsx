import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-6  bg-gray-900 text-white ">
        <div>
          <h4 className="font-bold text-lg mb-2">ABOUT US</h4>
          <p className='text-justify my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eum cumque quia eligendi nisi omnis amet minima sunt sequi, voluptates accusantium obcaecati excepturi aliquid ut accusamus dolorem ipsam delectus soluta.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">NEWSLETTER</h4>
          <p className='text-justify my-5'>Stay updated with our latest trends</p>
          <div className='flex'>
            <input type="text" placeholder='Email ID' className='p-2 placeholder-gray-500 bg-white' />
            <button className="bg-yellow-400 py-2 px-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>

          </div>
        </div>
        <div>
          <h4 className='font-bold mb-2'>FOLLOW US</h4>
          <p className='text-justify my-5'>Let us be social</p>
          <div className="flex gap-1">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>

        </div>
      </div>

      <div className=" bg-black p-3 text-center  text-white">
        <p>Copyright &copy; 2025 All rights reserved | This website is made with &#10084; By Saranya P S</p>
      
      </div>

    </>
  )
}

export default Footer