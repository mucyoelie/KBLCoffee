import React from "react";


const coffeeTypes = [
  {
    
    image:'onecupB.png'

  },
  {
    image:'jurucoffee.png'
  },
  {
    
   image:'ikawahouse.png'
    
  },
  {
  
    image:'ikawacafe.png'
    
  },
  {
   
    image:'monacoffee.png'
      
  },
 
];
const Global = () => {
  return (
    <div className="bg-white w-full  my-10">
      
      <div className=" mx-auto px-4 xl:mx-[40px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 xl:mx-[60px]">
          {coffeeTypes.map((type,index) => (
            <div
              key={index}
              className="bg-white text-gray-300 p-6 rounded-lg   transition-shadow duration-300 mx-auto"
            >
              <div className="w-60 h-60 rounded-xl m-auto hover:shadow-xl rounded-full flex items-center">
                <img 
                  src={type.image} 
                  alt="typeType"
                  className="w-40 h-40 m-auto p-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Global;