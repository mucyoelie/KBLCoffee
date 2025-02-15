import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-medium">
      <div className=" mx-auto px-4">
        {/* Grid layout for content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 gap-8 xl:mx-[60px]  lg:text-lg ">
          {/* Logo and About Section */}
          <div className="space-y-10 ">
            <img
              src="kbllogo-green.png"
              alt="Kaffa Logo"
              className="w-[20rem] sm:w-24 lg:w-[14rem] rounded-lg xl:px-10"
            />
            <p className=" text-sm sm:text-base lg:text-lg xl:px-10">
              Etiam consequat sem ullamcorper, euismod metus sit amet,
              tristique justo. Vestibulum mattis, nisi ut.
            </p>
            <div className="flex space-x-4 xl:px-10">
              <a
                href="/"
                className="text-[#006242] text-xl hover:text-green-600"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                className="text-[#006242] text-xl hover:text-green-600"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                className="text-[#006242] text-xl hover:text-green-600"
              >
                <FaInstagram />
              </a>
              <a
                href="/"
                className="text-[#006242] text-xl hover:text-green-600"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-[4rem]">
            <h3 className="text-[#006242] font-bold text-lg  border-b-2  border-[#006242] w-1/2 ">Contact Info</h3>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <span className="font-bold my-10">Our location:</span>
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
          <div className="space-y-20">
            <h3 className="text-[#006242] font-bold text-lg  border-b-2  border-[#006242] w-1/2">Subscribe</h3>
            <form className="space-y-4">
            <div className="flex items-center w-[5ovw] sm:w-[50vw] xl:w-[30vw] lg:w-[40vw] bg-white rounded-full overflow-hidden shadow-md">
               <input
                 type="email"
                   placeholder="Your email ..."
                  className="px-6 py-4 flex-1 bg-white text-gray-800 placeholder-gray-500 text-lg w-[8rem] focus:outline-none"
                 />
                <button
               type="submit"
              className="px-6 py-4 bg-[#006242] text-white font-bold hover:bg-green-600 transition-all rounded-full xl:w-[10rem] ">
                  Subscribe
               </button>
             </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label
                  htmlFor="terms"
                  className=" text-lg cursor-pointer" 
                >
                  I have read and agree to the terms & conditions
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-start text-lg  border-t border-[#006242] pt-5 xl:mx-[80px]">
          <p>
            <span className="text-[#006242] font-bold ">KBL Coffee</span> © All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
