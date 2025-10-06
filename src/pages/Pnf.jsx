import React from 'react'
import { Link } from "react-router-dom";

const Pnf = () => {
  return (
    <>
    
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Illustration */}
      <img
        src="./pnf.gif"
        alt="lost"
        className="w-100 mb-6"
      />

      {/* Text */}
      <p className="text-gray-600">Oh No !</p>
      <h1 className="text-3xl font-bold mb-2">Look Like You're Lost</h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available
      </p>

      {/* Back Button */}
      <Link to="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          BACK HOME
        </button>
      </Link>
    </div>

    </>
  )
}

export default Pnf