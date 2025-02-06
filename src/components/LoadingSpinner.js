import React from "react";

const LoadingSpinner = () => {
  return (
   
    <div className="flex items-center justify-center min-h-screen bg-white border-2 border-green-900">
    <div className="flex items-center justify-center w-40 h-40 sm:w-40 sm:h-40 md:w-52 md:h-52 border-2 border-green-900 rounded-full p-[2rem]">
      <img
        src="/Coffee3.png"
        alt="Loading..."
        className="w-full h-full animate-spin rounded-lg"
      />
    </div>
  </div>
  
  );
};

export default LoadingSpinner;