import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 bg-gray-900 text-white text-center">
        
        {/* About Us */}
        <div>
          <h4 className="font-bold text-xl mb-3">ABOUT US</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum eum cumque quia eligendi nisi omnis amet minima sunt sequi, 
            voluptates accusantium obcaecati excepturi aliquid ut accusamus dolorem ipsam delectus soluta.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-xl mb-3">NEWSLETTER</h4>
          <p className="text-gray-300 text-sm mb-5">Stay updated with our latest trends</p>
          <div className="flex justify-center items-center  sm:flex-row ">
            <input
              type="text"
              placeholder="Email ID"
              className="p-2 w-64 sm:w-auto placeholder-gray-500 bg-white text-black  focus:outline-none"
            />
            <button className="bg-yellow-400 py-2 px-4  hover:bg-yellow-500 transition">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-bold text-xl mb-3">FOLLOW US</h4>
          <p className="text-gray-300 text-sm mb-5">Let us be social</p>
          <div className="flex justify-center gap-6 text-2xl">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500 transition" />
            <FontAwesomeIcon icon={faXTwitter} className="hover:text-blue-400 transition" />
            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-600 transition" />
            <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-blue-500 transition" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4 text-center text-white text-sm">
        <p>
          Copyright &copy; 2025 All rights reserved | This website is made with 
          <span className="text-red-500"> ♥ </span> by <span className="font-semibold">Saranya P S</span>
        </p>
      </div>
    </>
  )
}

export default Footer
