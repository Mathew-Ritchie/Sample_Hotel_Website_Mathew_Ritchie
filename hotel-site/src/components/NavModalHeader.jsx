import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem.jsx";

export default function NavModalHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAccommodationOpen, setIsAccommodationOpen] = useState(false); 
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <>
      <div className="bg-black/40 flex items-center justify-end p-4 text-white shadow-lg h-20 w-full fixed  z-50">
        {/* Logo with link back to Home page */}
        <Link className="bg-gray-900/80 rounded-b-4xl absolute top-0 left-4 h-20 w-35 flex justify-center " to="/">
          <img
            src="/images/hotel-logo.png"
            alt="Bayside Pizzeria Logo"
            className="h-20 w-auto"
            width={417}
            height={96}
          />
        </Link>
        {/* Mobile Hamburger Menu for lg and down */}
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
          <NavItem to="/">Home</NavItem>

          <div className="relative group">
            <NavItem to="/accommodations">Accommodation</NavItem>
            <div className="absolute left-0 mt-0.5 hidden w-48 rounded-md bg-black/90 shadow-lg group-hover:block">
              <NavItem
                  to="/accommodations/standard"
                  className="text-lg"
                > Standard Room
              </NavItem>
              <NavItem
                  to="/accommodations/deluxe"
                  className="text-lg"
                > Deluxe Room
              </NavItem>
            </div>
          </div>
           <div className="relative group">
            <NavItem to="/facilities">Facilities</NavItem>
            <div className="absolute left-0 mt-0.5 hidden w-48 rounded-md bg-black/90 shadow-lg group-hover:block">
              <NavItem
                  to="/facilities/pool"
                  className="text-lg"
                > Swimming Pool
              </NavItem>
              <NavItem
                  to="/facilities/gym"
                  className="text-lg"
                > Fitness Center
              </NavItem>
              <NavItem
                  to="/facilities/spa"
                  className="text-lg"
                > Spa & Beauty Center
              </NavItem>
            </div>
          </div>
          
          <NavItem to="/restaurant">Restaurant</NavItem>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact-us">Contact Us</NavItem>
        </nav>
      </div>

      {/* Overlay for mobile navigation */}
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

      {/* Mobile Navigation Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu heading & Close button */}
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

        {/* Mobile Navigation */}
        <div className="flex flex-col justify-between items-start h-140">
          <nav className="p-4 space-y-2">
            <NavItem to="/" onClick={toggleNav}>Home</NavItem>
              <div className="space-y-1">
                  <div className="flex items-center justify-between rounded-md hover:bg-gray-700">
                    <NavItem
                      to="/accommodations"
                      onClick={toggleNav}
                      className="flex-1"
                    >
                      Accommodation
                    </NavItem>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsAccommodationOpen((prev) => !prev);
                      }}
                      className="p-2"
                    >
                      ▼
                    </button>
                  </div>

                  {isAccommodationOpen && (
                    <div className="ml-4 space-y-1">
                      <NavItem
                        to="/accommodations/standard"
                        onClick={toggleNav}
                        className="text-sm"
                      >
                        Standard Room
                      </NavItem>
                      <NavItem
                        to="/accommodations/deluxe"
                        onClick={toggleNav}
                        className="text-sm"
                      >
                        Deluxe Room
                      </NavItem>
                    </div>
                  )}
                </div>
            


            <div className="space-y-1">
                  <div className="flex items-center justify-between rounded-md hover:bg-gray-700">
                    <NavItem
                      to="/facilities"
                      onClick={toggleNav}
                      className="flex-1"
                    >
                      Facilities
                    </NavItem>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setIsFacilitiesOpen((prev) => !prev);
                      }}
                      className="p-2"
                    >
                      ▼
                    </button>
                  </div>

                  {isFacilitiesOpen && (
                    <div className="ml-4 space-y-1">
                      <NavItem
                        to="/facilities/pool"
                        onClick={toggleNav}
                        className="text-sm"
                      >
                        Swimming Pool
                      </NavItem>
                      <NavItem
                        to="/facilities/gym"
                        onClick={toggleNav}
                        className="text-sm"
                      >
                        Fitness Center
                      </NavItem>
                      <NavItem
                        to="/facilities/spa"
                        onClick={toggleNav}
                        className="text-sm"
                      >
                        Spa and Beauty Center
                      </NavItem>
                    </div>
                  )}
                </div>
            <NavItem to="/gallery" onClick={toggleNav}>Gallery</NavItem>
            <NavItem to="/contact-us" onClick={toggleNav}>Contact Us</NavItem>
          </nav>
        </div>
      </div>
    </>
  );
}
