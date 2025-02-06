import React from "react";
import Footer from "../components/Footer";

const About =() => {
  const about = [
      
  ]
  return(
    <div  id="home" className="bg-gray-100 xl:h-[40rem] absolute top-0  w-full">
    <section className="bg-gray-100 p-6 sm:p-10 md:p-16 lg:p-10 text-left w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%]
    xl:w-[50%] h-auto mx-auto mt-40 mb-20 xl:ml-40  rounded-lg  ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-4 sm:mb-6 animate-bounce dark:text-gray-200">
        About Us
          </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed dark:text-gray-200">
      </p>
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#003366] text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          GO TOP
        </button>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default About;
