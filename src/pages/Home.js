import React from "react";
import CoffeeTypes from "../components/CoffeeTypes";
import ExclusiveCoffee from "../components/ExclusiveCoffee";
import CoffeeFeatures from "../components/CoffeeFeatures";
import CoffeeShowcase from "../components/CoffeeShowcase";
import Features from "../components/OrderForm";
import Global from "../components/Parters";

function Home() {
  return (
    <div id="home" className="relative font-medium text-xl">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white xl:mx-[60px]">
            <span className="text-[#006242] block text-6xl">More Than Coffee,</span>A Lasting Impact
          </h1>
          <p className="text-lg sm:text-base md:text-lg xl:text-xl lg:text-xl text-gray-200 mt-4 xl:mx-[60px] w-full">
          Experience the true essence of Rwandan coffee<br/><span className="text-[#006242]">—sustainably sourced,</span><br/>expertly roasted,and crafted for perfection. <br/>Every cup tells a story of
             quality and passion.<br/>
     
           
          </p>
          {/* Button */}
          <a href="/contact">
            <button className="mt-6 bg-[#006242] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition xl:mx-[60px]">
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
