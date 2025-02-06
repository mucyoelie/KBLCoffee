import React from "react";
import { CakeIcon, CheckBadgeIcon, FireIcon } from "@heroicons/react/24/outline";

const BestProduct = () => {
  const phoneNumber = "250787490069"; // WhatsApp phone number without the '+' symbol
  const message = "Hello! I would like to place an order: https://whatsappmenus.com/restaurant/leukapizza";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('Coffee20.jpg')",
      }}
    >
      {/* Content Container */}
      <div
        className="bg-transparent p-6 sm:p-10 md:p-12 lg:py-20 text-start w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] xl:w-[50%] 
          h-auto sm:h-[30rem] xl:mt-6 lg:mt-32 md:mt-20 mt-16 mx-auto rounded-lg absolute"
      >
        {/* Left Section */}
        <div className="text-white space-y-6">
          <h1 className="text-7xl sm:text-5xl lg:text-6xl font-bold leading-tight xl:mx-[60px]">
            Buy Our <span className="text-[#4D7F43]">Coffee</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed xl:mx-[60px]">
            Nulla pretium congue elit, ut varius libero. Pellentesque sed tincidunt massa. In ornare ullamcorper erat, sit amet
            feugiat enim.
          </p>
          <div className="grid xl:grid-cols-3 md:grid-cols-3 ld:grid-cols-3 grid-cols-2 gap-6 xl:mx-[60px]">
            {/* Feature Icons */}
            <div className="text-center">
              <CakeIcon className="text-green-500 h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold text-sm sm:text-base">Wide Assortment</p>
            </div>
            <div className="text-center">
              <CheckBadgeIcon className="text-green-500 h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold text-sm sm:text-base">High Quality</p>
            </div>
            <div className="text-center">
              <FireIcon className="text-green-500 h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold text-sm sm:text-base">Awesome Aroma</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 xl:mx-[60px]">
            {/* Read More Button */}
            <button
              className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-[#4D7F43] text-white text-base sm:text-lg 
              font-medium rounded-full hover:bg-green-600"
            >
              Read More
            </button>

            {/* WhatsApp Order Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-[#4D7F43] text-white text-base sm:text-lg 
              font-medium rounded-full hover:bg-green-700"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
