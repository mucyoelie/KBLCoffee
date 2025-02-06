import React from "react";

const coffeeTypes = [
  {
    id: "01",
    name: "Arabica Green",
    description: "Curabitur semper erat a lacus consequat, sit amet quam convallis.",
  },
  {
    id: "02",
    name: "Arabica Roasted",
    description: "Praesent at faucibus justo, eu semper massa viverra luctus.",
  },
  {
    id: "03",
    name: "Robusta Roasted",
    description: "Fusce venenatis ante ac interdum faucibus proin nunc.",
  },
  {
    id: "04",
    name: "Mixed Sorts",
    description: "Aenean hendrerit ligula ut facilisis convallis gravida suscipit.",
  },
];

const CoffeeTypes = () => {
  return (
    <section className="pt-24 lg:mb-[-5.1rem] md:mb-[-5rem]  bg-white ">
      <div className=" mx-auto px-4 xl:mx-[40px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 xl:mx-[60px]">
          {coffeeTypes.map((type) => (
            <div
              key={type.id}
              className="bg-black text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#4D7F43] text-xl mb-4">{type.id}</div>
              <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
              <p className="text-gray-400">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="flex flex-wrap items-center justify-center px-6 py-12 lg:px-16 lg:py-24 bg-white my-20  xl:mx-[60px]">
      {/* Left Features */}
      <div className="w-full lg:w-1/3 flex flex-col items-start space-y-12 ">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-10 rounded-full mb-10">
          <img src="Coffee12.jpg" alt="Coffee5 images" className="w-full h-full"/>
          </div>
          <div>
            <h3 className="text-xl font-bold">Pure Grades</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" rounded-full mb-10 w-20 h-10">
          <img src="Coffee16.png" alt="Coffee5 images"/>
          </div>
          <div>
            <h3 className="text-xl font-bold">Wide Assortment</h3>
            <p className="text-gray-600">
              Cras ut nisl ac sapien interdum scelerisque sed in elit rutrum in massa sed congue eget turpis ligula.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className=" rounded-full mb-10 w-20 h-10">
          <img src="Coffee5.png" alt="Coffee5 images"/>
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
          <div className="border-2 border-green-600 rounded-full mb-10 w-20 h-10">
            <img src="Coffee14.png" alt="Coffee5 images"/>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">Excellent Grinding</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
          <div className="border-2 border-green-600 rounded-full mb-10 w-20 h-10">
          <img src="Coffee19.png" alt="Coffee2 Images" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <h3 className="text-xl font-bold">Awesome Aroma</h3>
            <p className="text-gray-600">
              Maecenas dapibus mattis eros, at fermentum sapien malesuada sit amet. Quisque in sollicitudin eros.
            </p>
          </div>
          <div className="border-2 border-green-600 rounded-full mb-10 w-20 h-10">
          <img src="Coffee13.png" alt="Coffee5 images"/>
          </div>
        </div>
      </div>
    </section>
    </section>
    
  );
};

export default CoffeeTypes;
