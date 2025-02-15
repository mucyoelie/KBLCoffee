import React from 'react';
import Icon from "../components/Icon";
const Features = () => {
  return (
    <div className="pt-2 pb-2 bg-[#006242] text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mx-[60px]">
        <div className="flex flex-col items-center text-center p-6 bg-[#006242] xl:border-b-0 xl:border-r-[1.2px] lg:border-r-[1.2px] md:border-r-[1.2px] lg:border-b-0 md:border-b-0 border-white border-dashed h-[15rem] border-b-[1.2px]">
        <Icon name=" icon-Coffee9-icon" className="text-6xl text-white " />
          <h3 className="text-xl font-semibold mb-2 "> Ethical <br/>
          Sourcing
          </h3>
          <p className="text-gray-600"></p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#006242] xl:border-b-0 xl:border-r-[1.2px] lg:border-r-[1.2px] md:border-r-[1.2px] lg:border-b-0 md:border-b-0 border-white border-dashed h-[15rem] border-b-[1.2px]">
        < Icon name=" icon-Coffee12-icon" className="text-6xl text-white" />
          <h3 className="text-xl font-semibold mb-2 ">Sustainable Farming
          </h3>
          <p className="text-gray-600"></p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#006242] xl:border-b-0 xl:border-r-[1.2px] lg:border-r-[1.2px] md:border-r-[1.2px] lg:border-b-0 md:border-b-0 border-white border-dashed h-[15rem] border-b-[1.2px]">
        < Icon name=" icon-Coffee10-icon" className="text-6xl text-white" />
          <h3 className="text-xl font-semibold mb-2 ">Women’s Empowerment
          </h3>
          <p className="text-gray-600"></p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#006242] xl:border-b-0 xl:border-r-[1.2px] lg:border-r-[1.2px] lg:border-b-0 md:border-b-0 md:border-r-[1.2px] border-white border-dashed h-[15rem] border-b-[1.2px]">
        < Icon name=" icon-Coffee11-icon" className="text-6xl text-white" />
          <h3 className="text-xl font-semibold mb-2 ">Community<br/> Impact</h3>
          <p className="text-gray-600"></p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-[#006242]  h-[15rem]">
       < Icon name=" icon-Coffee7-icon" className="text-6xl text-white" />
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600"></p>
        </div>
        
      </div>
    </div>
  );
};

export default Features;