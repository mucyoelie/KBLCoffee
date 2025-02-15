import React from "react";
import Icon from "../components/Icon";

const coffeeTypes = [
  {
    id: "",
    name: "Arabica Green",
   
    icon:  <Icon name=" icon-coffee-bean-icon" className="text-6xl text-gray-900" />,
  },
  {
    id: "",
    name: "Arabica Roasted",
    
      icon:  <Icon name=" icon-coffee-bean-icon" className="text-6xl text-gray-900" />
  },
  {
    id: "",
    name: "Robusta Roasted",
   
      icon:  <Icon name=" icon-coffee-bean-icon" className="text-6xl text-gray-900" />
  },
  {
    id: "",
    name: "Mixed Sorts",
  
      icon:  <Icon name=" icon-coffee-bean-icon" className="text-6xl text-gray-900" />
  },
  {
    id: "",
    name: "Mixed Sorts",
  
      icon:  <Icon name=" icon-coffee-bean-icon" className="text-6xl text-gray-900" />
  },
 
];
const Global = () => {
  return (
    <div className="bg-white w-full  my-20">
      
      <div className=" mx-auto px-4 xl:mx-[40px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 xl:mx-[60px]">
          {coffeeTypes.map((type) => (
            <div
              key={type.id}
              className="bg-white text-gray-300 p-6 rounded-lg  hover:shadow-lg transition-shadow duration-300 mx-auto"
            >
              <div className="text-[#4D7F43] text-xl mb-4 mx-auto">{type.id}</div>
              <div className="mx-auto">{type.icon }</div>
              <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Global;