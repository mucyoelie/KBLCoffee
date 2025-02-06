import React from 'react';

const products = [
  {
    title: 'Brazilian Coffee',
    image: 'Coffee1.jpg',
    description: 'Rich and aromatic coffee from Brazil, perfect for your mornings.',
  },
  {
    title: 'Ethiopian Coffee',
    image: 'Coffee1.jpg',
    description: 'Unique and fruity Ethiopian coffee with bold flavors.',
  },
  {
    title: 'Colombian Coffee',
    image: 'Coffee1.jpg',
    description: 'A smooth and balanced coffee sourced from Colombia.',
  },
  {
    title: 'Kenyan Coffee',
    image: 'Coffee1.jpg',
    description: 'Full-bodied Kenyan coffee with hints of berry flavors.',
  },
  {
    title: 'Arabica Coffee',
    image: 'Coffee1.jpg',
    description: 'Premium Arabica coffee beans with a smooth finish.',
  },
 
  {
    title: 'Robusta Coffee',
    image: 'Coffee1.jpg',
    description: 'Strong and bold Robusta coffee to kickstart your day.',
  }
];

const Productpage = () => {
  return (
   
    <section  className="bg-white py-20 lg:my-[0%] md:my-[0] px-5 xl:my-[0%] sm:mt-[10%]">
    
      <div className="text-start">
        <h2 className="text-4xl font-bold text-[#4D7F43] mb-6 xl:mx-[60px]">Popular Products</h2>
        <p className="text-gray-500 mb-8  xl:mx-[60px]">
          Discover our premium range of coffee products
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 xl:mx-[60px] 
          ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col  items-start  text-start justify-center bg-gray-700 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover rounded-md hover:scale-110"
              />
              {/* Product Title */}
              <h3 className="mt-4 text-lg   font-semibold text-[#4D7F43]">
                {product.title}
              </h3>
              {/* Product Description */}
              <p className="mt-2 text-gray-100">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
  
    </section>
  );
};

export default Productpage;
