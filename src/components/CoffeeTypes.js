import React from "react";
import Icon from "../components/Icon";
const CoffeeTypes = () => {
  return (
    <section className="pt-10 lg:mb-[-5.1rem] md:mb-[-5rem]  bg-white ">
      <section className="flex flex-wrap items-center justify-center px-6 py-12 lg:px-16 lg:py-24 bg-white my-10  xl:mx-[60px]">
      {/* Left Features */}
      <div className="w-full lg:w-1/3 flex flex-col items-start space-y-12 ">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-10  mb-10">
          <Icon name=" icon-Coffee1-icon" className="text-5xl text-[#006242] font-thin" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Pure Grades</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="  mb-10 w-20 h-10">
         <Icon name="icon-Coffee2-icon" className="text-5xl text-[#006242] font-black" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Wide Assortment</h3>
            <p className="text-gray-600">
              Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue eget turpis ligula.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" mb-10 w-20 h-10">
          <Icon name="icon-Coffee3-icon" className="text-5xl text-[#006242] font-thin"  />
          </div>
          <div>
            <h3 className="text-xl font-bold">Proper Roasting</h3>
            <p className="text-gray-600">
              Proin non vulputate diam, ut varius orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Coffee Image */}
      <div className="w-full lg:w-1/3 flex items-center justify-center py-12">
        <img
          src="Coffee9.jpg" 
          alt="Coffee Cup"
          className="max-w-full"
        />
      </div>

      {/* Right Features */}
      <div className="w-full lg:w-1/3 flex flex-col items-end space-y-12">
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">High Quality</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
          <div className=" rounded-full mb-10 w-20 h-10">
          <Icon name="icon-Coffee5-icon" className="text-6xl text-[#006242]"  />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">Excellent Grinding</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
          <div className=" rounded-full mb-10 w-20 h-10">
          <Icon name="icon-2024197" className="text-6xl text-[#006242]"  />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">Awesome Aroma</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
          <div className=" rounded-full mb-10 w-20 h-10">
          <Icon name="icon-Coffee4-icon" className="text-6xl text-[#006242]"  />
          </div>
        </div>
      </div>
    </section>
    </section>
    
  );
};

export default CoffeeTypes;
