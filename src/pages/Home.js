import React from "react";
import CoffeeTypes from "../components/CoffeeTypes";
import ExclusiveCoffee from "../components/ExclusiveCoffee";
import CoffeeFeatures from "../components/CoffeeFeatures";
import CoffeeShowcase from "../components/CoffeeShowcase";
import Features from "../components/OrderForm";
import Global from "../components/Parters";

function Home() {
  return (
    <div id="home" className="relative font-medium">
      {/* Video Section */}
      <div className="relative w-full h-[88vh] md:h-[70vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-screen">
        <video
          src="kblVideo.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        {/* Overlay Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-left text-start p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white xl:mx-[60px]">
            <span className="text-[#006242] block">Welcome to</span> KBL Coffee
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mt-4 xl:mx-[60px] w-full">
          Curabitur imperdiet varius lacus, id placerat purus vulputate non.<br/>
          Fusce in felis vel arcu maximus placerat eu ut arcu.Ut nunc ex,<br/>
         gravida vel porttitor et,pretium ac sapien.
           
          </p>
          {/* Button */}
          <a href="/contact">
            <button className="mt-6 bg-[#006242] text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition xl:mx-[60px]">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Features and Coffee Sections */}
      <Features />
      <CoffeeTypes />
      <ExclusiveCoffee />
      <CoffeeFeatures />
      <CoffeeShowcase />
      <Global />
    </div>
  );
}

export default Home;
