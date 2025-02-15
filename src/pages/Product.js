import React from "react";

import Productpage from "../components/Productpage";
function Product() {
  return(
    <div className="my-20 w-full  font-medium">
    <section className=" ">
    <div className="fixed bottom-8 right-8 z-20">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#006242] text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          GO TOP
        </button>
      </div>
<Productpage/>
</section>
  </div>

  )
  
}
export default Product;
