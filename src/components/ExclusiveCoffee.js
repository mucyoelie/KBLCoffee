import React from "react";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ExclusiveCoffee = () => {
  return (
    <section className="bg-white py-10 px-4 md:py-16 md:px-8 ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-[#006242] font-black text-2xl md:text-3xl lg:text-4xl">
          Finest Arabica coffee
          </h2>
          <h1 className="text-black font-black text-3xl md:text-4xl lg:text-5xl">
          Women-Led, Sustainable Coffee
          </h1> 
          <p className="text-gray-500 text-sm md:text-base lg:text-lg">
          KBL Coffee prioritizes <span className="text-[#006242] font-bold">women empowerment and ethical agro-industry practices</span>, ensuring <span className="text-[#006242] font-bold">full traceability </span>from farm to cup. 
          Every purchase supports farmers directly, promoting sustainability and fair trade.
          </p>
          {/* Icons and Information */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-[#006242]" size={24} />
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base">
                Kigali, Kimihurura
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-3 rounded-full">
                <FaPhone className="text-[#006242]" size={24} />
              </div>
              <p className="text-gray-700 font-medium text-sm md:text-base">
              +250787255672
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
          <a href="/about">
            <button className="px-6 py-2 bg-[#006242] text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300">
            Read More
            </button>
            </a>
            <a href="/product">
            <button className="px-6 py-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300">
              Shop now
            </button>
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative">
          <img
            src="Cofee50.png"
            alt="Coffee"
            className="w-full h-auto rounded-lg"
          />
          {/* Badge */}
          <div className="absolute top-10 left-0 sm:top-16 md:top-20 lg:top-5 xl:top-28 w-[18rem] h-[18rem] sm:w-[12rem] lg:w-[15rem] h-[10rem] sm:h-[12rem] lg:h-[15rem] md:w-[14rem] md:h-[14rem ] rounded-full border-2 border-dashed border-[#006242] flex items-center justify-center">
            <div className="bg-white xl:mb-[30%] lg:mb-[35%] ml-[-40%] mb-[45%] lg:ml-[-35%] xl:mr-[-3%] rounded-full w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] lg:w-[12rem] lg:h-[12rem] md:w-[12rem] md:h-[12rem] xl:w-40 xl:h-40 flex items-center justify-center shadow-md transform translate-x-1/4 translate-y-1/4">
              <div className="text-center ">
                <h1 className="text-gray-500 text-sm sm:text-base lg:text-lg font-bold">
                  Since
                </h1>
                <h1 className="text-green-700 font-bold text-lg sm:text-xl lg:text-2xl">
                  2020
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
   
  );
};

export default ExclusiveCoffee;
