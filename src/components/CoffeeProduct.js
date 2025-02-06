import React from "react";

const CoffeeProducts = () => {
  const products = [
    {
      id: 1,
      name: "Arabica Green",
      description: "Curabitur semper erat a lacus consequat, sit amet quam convallis.",
      image: "Coffee4.jpg", 
    },
    {
      id: 2,
      name: "Arabica Roasted",
      description: "Praesent at faucibus justo, eu semper massa viverra luctus.",
      image: "Coffee4.jpg", 
    },
    {
      id: 3,
      name: "Robusta Roasted",
      description: "Fusce venenatis ante ac interdum faucibus proin nunc.",
      image: "Coffee4.jpg",
    },
    {
      id: 4,
      name: "Mixed Sorts",
      description: "Aenean hendrerit ligula ut facilisis convallis gravida suscipit.",
      image: "Coffee4.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:h-screen">
      <div className="text-center mb-8 xl:mx-[60px]">
        <h2 className="text-2xl md:text-3xl font-bold">
          Morbi eu varius neque, a ultricies sem.
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fusce vitae convallis mi. Etiam dictum arcu posuere mauris{" "}
          <span className="text-green-600 font-bold">semper accumsan</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="absolute">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                {product.id.toString().padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoffeeProducts;
