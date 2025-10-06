import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
    <Header/>

    <div className="px-6 md:px-20 py-10">
      {/* Heading */}
      <h1 className="text-center text-2xl font-semibold mb-4">Contacts</h1>
      <p className="text-center text-black max-w-3xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione,
        officia delectus consequuntur, dicta libero magni omnis architecto
        voluptas culpa praesentium ipsam assumenda quae dolor, nihil rerum fugit
        expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center gap-20 mb-10 text-black">
        <div className="flex items-center gap-3 ">
          <FontAwesomeIcon icon={faLocationDot} className=" p-2 text-2xl text-black rounded-full bg-gray-200" />
          <p>123 Main Street, Apt 4B, Anytown, CA 91234</p>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} className="p-2 text-2xl text-black rounded-full bg-gray-200" />
          <p>+91 9874561230</p>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faEnvelope} className="p-2 text-2xl text-black rounded-full bg-gray-200" />
          <p>Bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form + Map */}
      <div className="grid md:grid-cols-2 gap-10 px-10 ">
        {/* Form */}
        <div className=" rounded p-6 shadow-md bg-gray-200">
          <h2 className="text-center font-medium mb-4">Send me Message</h2>
          <form className="space-y-4  mx-5 ">
            <input
              type="text"
              placeholder="Name"
              className="w-full  bg-white px-4 py-2 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full  bg-white px-4 py-2 rounded focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full  bg-white px-4 py-2 rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-900"
            >
              Send
            </button>
          </form>
        </div>

        {/* Map */}
        <div> 
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62877.26047016965!2d76.3032992!3d10.0158609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c6c4e4f9a4d%3A0x9cba74ed2d8e7686!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708615462181!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-md"
          ></iframe>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}

export default Contact