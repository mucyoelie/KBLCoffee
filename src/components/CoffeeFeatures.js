import React, { useState } from "react";
import { Star, X } from "lucide-react";
import './custom.css'
const CoffeeProductCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coffeeType, setCoffeeType] = useState("beans");
  const [quantity, setQuantity] = useState(1);
  const [packageSize, setPackageSize] = useState("1kg");

  const toggleModal = () => setIsOpen(!isOpen);

  const sendToWhatsApp = () => {
    const message = `🌟 New Coffee Order! 🌟

    ☕ Coffee Type: ${coffeeType === "beans" ? "Coffee Beans" : "Ground Coffee"}
    📦 Package Size: ${packageSize}
    🔢 Quantity: ${quantity}
    
    💥 Ready to enjoy a premium coffee experience! 🎉`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "250787490069"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, "_blank");
    

    // Close modal after sending
    toggleModal();
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
      {/* Left side - Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end xl:right-40">
        <img
          src="CoffeeBag.png"
          alt="Ethiopia Arabica Coffee Package"
          className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg"
        />
      </div>

      {/* Right side - Product details */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Rating */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold">KBL Coffee</h1>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base">
          Enjoy the rich taste of KBL Coffee with an amazing vanilla aroma and a strong roasting process.
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {["Pure Grade", "Amazing Vanilla Aroma", "Strong Roasting", "Ultra Grinding"].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#006242]" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-lg md:text-xl">$19.99</span>
          <span className="text-red-500 text-xl md:text-2xl font-bold">$16.99</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            className="px-6 py-2 md:px-8 md:py-3 bg-[#006242] text-white rounded-full hover:bg-green-700 transition-colors"
            onClick={toggleModal}
          >
            Add to cart
          </button>
          <button className="px-6 py-2 md:px-8 md:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            More Info
          </button>
        </div>
      </div>

      {/* Modal for Coffee Selection */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black" onClick={toggleModal}>
              <X size={24} />
            </button>

            {/* Modal Title */}
            <h2 className="text-lg font-bold text-gray-800">Choose Your Coffee</h2>

            {/* Coffee Type Selection */}
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-600">Coffee Type:</label>
              <select
                className="mt-1 w-full p-2 border rounded-md"
                value={coffeeType}
                onChange={(e) => setCoffeeType(e.target.value)}
              >
                <option value="beans">Coffee Beans</option>
                <option value="ground">Ground Coffee</option>
              </select>
            </div>

            {/* Quantity Selection */}
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-600">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md"
              />
            </div>

            {/* Package Size Selection */}
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-600">Package Size:</label>
              <select
                className="mt-1 w-full p-2 border rounded-md"
                value={packageSize}
                onChange={(e) => setPackageSize(e.target.value)}
              >
                <option value="1kg">1kg</option>
                <option value="500g">500g</option>
                <option value="250g">250g</option>
              </select>
            </div>

            {/* Confirm Button */}
            <button
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
              onClick={sendToWhatsApp}
            >
              Confirm & Send to WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoffeeProductCard;
