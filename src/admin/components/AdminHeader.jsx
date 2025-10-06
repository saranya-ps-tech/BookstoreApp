import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 md:px-0">
        {/* logo */}
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://openclipart.org/image/800px/svg_to_png/275692/1489798288.png"
            alt="logo"
          />
          <h1 className="text-2xl font-bold ms-2">BOOKSTORE</h1>
        </div>

        {/* logout block */}
        <button className="border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white">
          <FontAwesomeIcon icon={faPowerOff} className="me-1" /> Logout
        </button>
      </div>

      {/* marquee section */}
      <nav className="w-full p-3 bg-black text-white md:flex justify-center items-center">
        <div className="w-full">
          <marquee>
            Welcome, Admin! You're all set to manage and monitor the system.
            Let's get to work!
          </marquee>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
