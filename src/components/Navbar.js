import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBox, FaBlog, FaPhoneAlt, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-white text-[#4D7F43] text-lg font-bold py-4 shadow-md px-10 w-full top-0 z-40 h-[5rem]">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
            <img src="Coffee7.png" alt="MyLogo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex items-center">
            <FaHome className="mr-2" />
            <Link to="/" className="hover:text-green-400">Home</Link>
          </li>
          <li className="flex items-center">
            <FaInfoCircle className="mr-2" />
            <Link to="/about" className="hover:text-green-400">About</Link>
          </li>
          <li className="flex items-center">
            <FaBox className="mr-2" />
            <Link to="/product" className="hover:text-green-400">Product</Link>
          </li>
          <li className="flex items-center">
            <FaBlog className="mr-2" />
            <Link to="/blog" className="hover:text-green-400">Blog</Link>
          </li>
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <Link to="/contact" className="hover:text-green-400">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="flex flex-col items-center mr-[-30px]">
            {isOpen ? (
              <FaTimes size={24} />
            ) : (
              <div className="space-y-1">
                <div className="w-8 h-1 bg-[#4D7F43] rounded-md ml-auto"></div>
                <div className="w-6 h-1 bg-[#4D7F43] rounded-md ml-auto"></div>
                <div className="w-4 h-1 bg-[#4D7F43] rounded-md ml-auto"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-md absolute top-[5rem] left-0 w-full py-4 space-y-4 z-50">
          <li className="flex items-center">
            <FaHome className="mr-2" />
            <Link to="/" className="hover:text-green-400" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="flex items-center">
            <FaInfoCircle className="mr-2" />
            <Link to="/about" className="hover:text-green-400" onClick={toggleMenu}>About</Link>
          </li>
          <li className="flex items-center">
            <FaBox className="mr-2" />
            <Link to="/product" className="hover:text-green-400" onClick={toggleMenu}>Product</Link>
          </li>
          <li className="flex items-center">
            <FaBlog className="mr-2" />
            <Link to="/blog" className="hover:text-green-400" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            <Link to="/contact" className="hover:text-green-400" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
