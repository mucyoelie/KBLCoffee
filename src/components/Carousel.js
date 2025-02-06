import React, { useRef, useState } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      image: "Coffee1.jpg",
      title: "Coffee Drinks",
      description: "Curabitur semper erat a lacus consequat, sit amet quam convallis.",
    },
    {
      image: "Coffee2.jpg",
      title: "Black & Green Tea",
      description: "Praesent at faucibus justo, eu semper massa viverra luctus.",
    },
    {
      image: "Coffee3.png",
      title: "Sandwiches",
      description: "Aenean hendrerit ligula ut facilisis convallis gravida suscipit.",
    },
    {
      image: "Coffee4.png",
      title: "Bakery & Sweets",
      description: "Fusce venenatis ante ac interdum faucibus proin nunc.",
    },
    {
      image: "Coffee5.jpg",
      title: "Smoothies",
      description: "Fusce venenatis ante ac interdum faucibus proin nunc.",
    },
    {
      image: "Coffee6.png",
      title: "Ice Cream",
      description: "Curabitur semper erat a lacus consequat, sit amet quam convallis.",
    },
    {
      image: "Coffee7.png",
      title: "Cookies",
      description: "Aenean hendrerit ligula ut facilisis convallis gravida suscipit.",
    },
    {
      image: "Coffee8.png",
      title: "Pastries",
      description: "Praesent at faucibus justo, eu semper massa viverra luctus.",
    },
  ];

  const totalItems = items.length;

  const scrollToIndex = (index) => {
    if (!carouselRef.current) return;

    const itemWidth = carouselRef.current.offsetWidth / Math.min(1, totalItems); // Responsive item width
    carouselRef.current.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleDotClick = (index) => {
    scrollToIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-16 bg-white">
      {/* Section Heading */}
      <h2 className="text-lg font-semibold text-green-600">Kaffa Menu</h2>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Tasty Products
      </h1>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex space-x-4 md:space-x-6 lg:space-x-8 snap-x snap-mandatory overflow-x-scroll scrollbar-hide"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 md:h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              activeIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
