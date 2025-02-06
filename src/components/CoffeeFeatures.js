import React from 'react';
import { Star } from 'lucide-react';

const CoffeeProductCard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 items-center lg:items-start">
      {/* Left side - Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end xl:right-40">
        <img 
          src="Coffee11.jpg" 
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
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {['Pure Grade', 'Amazing Vanilla Aroma', 'Strong Roasting', 'Ultra Grinding'].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
          <button className="px-6 py-2 md:px-8 md:py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
            Add to cart
          </button>
          <button className="px-6 py-2 md:px-8 md:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeProductCard;
