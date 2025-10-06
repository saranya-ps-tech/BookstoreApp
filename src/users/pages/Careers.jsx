import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowUpRightFromSquare, faXmark } from "@fortawesome/free-solid-svg-icons";

const Careers = () => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <Header />
      <div className="md:px-40 p-5">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold mb-5">Careers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum
            eligendi blanditiis! Ipsa dolor a sed quibusdam consequuntur maxime
            sint, quidem, velit a veniam blanditiis quis facilis odit, harum.
          </p>
        </div>

        <div className="my-10">
          <h1 className="text-2xl font-bold">Current openings</h1>

          <div className="flex my-10 justify-center items-center">
            <input
              type="text"
              className="p-2 border border-gray-200 text-black w-full placeholder-gray-600"
              placeholder="Job Title"
            />
            <button className="bg-green-900 text-white p-2">Search</button>
          </div>

          {/* Job Opening */}
          <div className="border border-gray-200 p-5 shadow my-5">
            <div className="flex mb-5 justify-between">
              <div className="w-full">HR Assistant</div>
              <button
                onClick={() => setModalStatus(true)}
                className="bg-blue-900 text-white p-3 ms-5 flex items-center"
              >
                Apply{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ms-2"
                />
              </button>
            </div>
            <p className="text-lg my-2">
              <FontAwesomeIcon icon={faLocationDot} /> Kochi
            </p>
            <p className="text-lg my-2">Job Type : Full-time</p>
            <p className="text-lg my-2">Salary : 20000-30000/month</p>
            <p className="text-lg my-2">Qualification :</p>
            <p className="text-lg my-2">Experience : 1-2yr</p>
            <p className="text-lg my-2">Description :</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalStatus && (
        <div
          className="fixed inset-0 bg-gray-500/75 flex justify-center items-center z-50"
          onClick={() => setModalStatus(false)}
        >
          <div
            className="bg-white rounded-2xl w-[600px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="bg-black text-white flex justify-between items-center p-3 text-xl">
              <h3>Application Form</h3>
              <button onClick={() => setModalStatus(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Modal content */}
            <div className="relative p-5">
              <div className="grid grid-cols-2 gap-x-5">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Qualification"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Email Id"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full p-2 border rounded placeholder-gray-600 text-black"
                  />
                </div>
                <div className="mb-3 col-span-2">
                  <textarea
                    placeholder="Cover Letter"
                    className="w-full p-2 border rounded placeholder-gray-400 text-black"
                  ></textarea>
                </div>
                <div className="mb-3 col-span-2 flex flex-col text-gray-400">
                  <label>Resume</label>
                  <input
                    type="file"
                    className="w-full border rounded file:p-2 file:bg-gray-400 file:text-white"
                  />
                </div>
              </div>

              {/* Modal footer */}
              <div className="bg-gray-200 p-3 w-full flex justify-end">
                <button className="py-2 px-3 rounded bg-gray-600 text-white">
                  Reset
                </button>
                <button className="py-2 px-3 rounded bg-blue-600 text-white ms-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Careers;
