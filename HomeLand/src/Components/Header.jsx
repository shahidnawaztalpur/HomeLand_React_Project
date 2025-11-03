import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-[9999]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Homeland<span className="text-gray-700">.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <NavLink 
          to=""
          className={({isActive}) =>
          `px-3 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Home
          </NavLink>

          <NavLink 
          to="/about"
          className={({isActive}) =>
          `px-3 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            About
          </NavLink>

          <NavLink 
          to="/properties"
          className={({isActive}) =>
          `px-3 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Properties
          </NavLink>

          <NavLink 
          to="/contact"
          className={({isActive}) =>
          `px-2 py-2 rounded-md transition 
          ${isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-600"}`
          }
          >
            Contact
          </NavLink>
          {/* <a href="#" className="hover:text-blue-600">Home</a>
          <a href="about" className="hover:text-blue-600">About</a>
          <a href="property" className="hover:text-blue-600">Property</a>
          <a href="contact" className="hover:text-blue-600">Contact</a> */}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#" className="block px-6 py-2 hover:bg-gray-100">Home</a>
          <a href="#" className="block px-6 py-2 hover:bg-gray-100">About</a>
          <a href="#" className="block px-6 py-2 hover:bg-gray-100">Property</a>
          <a href="#" className="block px-6 py-2 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
