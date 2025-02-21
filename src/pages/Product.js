import React from "react";

import Productpage from "../components/Productpage";
function Product() {
  return(
    <div className="my-20 min-w-full min-h-screen bg-cover font-medium relative z-20" >
    <section className=" ">
    <div className="fixed bottom-8 right-8 z-20">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#006242] text-white p-4 rounded-full hover:bg-green-600 transition-colors"
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
