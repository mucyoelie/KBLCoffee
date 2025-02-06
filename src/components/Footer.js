import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className=" mx-auto px-4">
        {/* Grid layout for content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-8 xl:mx-[60px]  lg:text-lg ">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <img
              src="Coffee8.jpg"
              alt="Kaffa Logo"
              className="w-20 sm:w-24 lg:w-28 rounded-lg"
            />
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
              Etiam consequat sem ullamcorper, euismod metus sit amet,
              tristique justo. Vestibulum mattis, nisi ut.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                className="text-[#4D7F43] text-xl hover:text-green-600"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className="text-[#4D7F43] text-xl hover:text-green-600"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="text-[#4D7F43] text-xl hover:text-green-600"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="text-[#4D7F43] text-xl hover:text-green-600"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-[#4D7F43] font-bold text-lg">Contact Info</h3>
            <hr className="border-green-400 w-16" />
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <p>
                <span className="font-bold">Our location:</span>
                <br />
                Kigali, KG 622 ST Kimihurura 
              </p>
              <p>
                <span className="font-bold">Phones:</span>
                <br />
                +250787255672
                <br />
                +250787490069
              </p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <h3 className="text-[#4D7F43] font-bold text-lg">Subscribe</h3>
            <hr className="border-green-400 w-16" />
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email ..."
                  className="flex-1 px-4 py-2 rounded-t-lg sm:rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-400 text-white rounded-lg sm:rounded-r-lg hover:bg-green-600 xl:mr-[40rem] "
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label
                  htmlFor="terms"
                  className="text-gray-400 text-sm cursor-pointer"
                >
                  I have read and agree to the terms & conditions
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-start text-sm text-gray-500 border-t border-[#4D7F43] pt-4 xl:mx-[60px]">
          <p>
            <span className="text-[#4D7F43] font-bold">KBL Coffee</span> © All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
