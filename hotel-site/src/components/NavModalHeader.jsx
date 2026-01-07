import React, { useState } from "react";
// import { a } from "react-router-dom";

export default function NavModalHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <>
      <div className="bg-black/40 flex items-center justify-end p-4 text-white shadow-lg h-20 w-full fixed  z-50">
        {/* <a className="bg-white/50 rounded-b-full absolute top-0 left-4 h-20 " href="/">
          <img
            src="/images/logo.png"
            alt="Bayside Pizzeria Logo"
            className="h-20 w-auto"
            width={417}
            height={96}
          />
        </a> */}
        <button
          className="lg:hidden text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Navigation for lg and up */}
        <nav className="hidden lg:flex items-center space-x-4 text-2xl pr-5">
          <a
            href="#dining"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Home
          </a>
          <a
            href="#pizza"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
           Accommodation
          </a>
          <a
            href="#pasta"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Facilities
          </a>

          <a
            href="#dessert"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Breakfast
          </a>
          <a
            href="#gallery"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Gallery
          </a>
          <a
            href="#contactUs"
            className="p-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Contact Us
          </a>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          backgroundColor: "var(--transparent-tech-grey)",
        }}
        onClick={toggleNav}
        aria-hidden={!isNavOpen}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
            onClick={toggleNav}
            aria-label="Close navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col justify-between items-start h-140">
          <nav className="p-4 space-y-2">
            <a
              href="#dining"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Home
            </a>
            <a
              href="#pizza"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
                Accommodation
            </a>
            <a
              href="#pasta"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
                Facilities
            </a>

            <a
              href="#dessert"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
                Breakfast
            </a>
            <a
              href="#gallery"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Gallery
            </a>
            <a
              href="#contactUs"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col gap-2 pl-2">
            <div className="flex justify-start gap-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="var(--orange)"
              >
                <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
              </svg>
              <p>000 000 0000</p>
            </div>
            <div className="flex justify-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="25px"
                fill="var(--orange)"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <p>
                <a href={"mailto:consult@maichatron.co.za"}> email@email.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
