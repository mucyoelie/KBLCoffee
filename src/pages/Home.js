import React  from "react";
import CoffeeTypes from "../components/CoffeeTypes";
import ExclusiveCoffee from "../components/ExclusiveCoffee"
import BestProduct from "../components/BestProduct";
import CoffeeShowcase from "../components/CoffeeShowcase";
import ProductsPage from "../components/Productpage";

function Home() {
  return (
    <div  id="home" className=" relative xl:min-h-screen" >
      <video  src="kblVideo.mp4"  autoPlay loop muted  className=" relative 
    left-0 
    w-full 
    h-[88vh]
    object-cover 
    z-0 
    md:bottom-10
    md:h-[70vh] 
    lg:bottom-0
    lg:h-[60vh] 
    xl:h-[70vh] 
    2xl:h-screen">
      </video>

      <section
              className="bg-transparent px-4 py-6 sm:py-10 md:py-16 lg:py-10 text-start w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] xl:max-w-[60%] mx-auto 
              mt-10 sm:mt-12 md:mt-10 lg:mt-12 xl:mt-16 rounded-lg absolute xl:top-40 top-20 lg:top-40 md:top-40  xl:left-[35rem] left-1/2 transform -translate-x-1/2 z-10"
            >
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-600 mb-2 text-start">
                <span className="text-[#4D7F43] text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">Welcome to</span>
              </h1>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-start">
                KBL Coffee
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mt-4 sm:mt-6 leading-relaxed text-start">
                Curabitur imperdiet varius lacus, id placerat purus vulputate non.
                <br/>
                 Fusce in felis vel arcu
                maximus placerat eu ut arcu. Ut nunc ex,
                <br/>
                gravida vel porttitor et,pretium ac sapien.
              </p>

              {/* Button */}
              <div className="flex justify-start mt-6">
                <a href="/contact">
                  <button
                    className="bg-[#4D7F43] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-400 transition duration-300"
                  >
                    Contact Us
                  </button>
                </a>
              </div>
        </section>
    <CoffeeTypes/>
    <ExclusiveCoffee/>
    <BestProduct/>
    <CoffeeShowcase/>
      <ProductsPage/>
    </div>
     
  );
}

export default Home;
