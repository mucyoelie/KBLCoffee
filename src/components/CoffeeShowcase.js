import React from 'react';

const CoffeeShowcase = () => {
  const coffeeTypes = [
    {
      id: "01",
      title: "Arabica Green",
      description: "Curabitur semper erat a lacus consequat, sit amet quam convallis.",
      image: "Coffee4.jpg"
    },
    {
      id: "02",
      title: "Arabica Roasted",
      description: "Praesent at faucibus justo, eu semper massa viverra luctus.",
      image: "Coffee1.jpg"
    },
    {
      id: "03",
      title: "Robusta Roasted",
      description: "Fusce venenatis ante ac interdum faucibus proin nunc.",
      image: "Coffee6.jpg"
    },
    {
      id: "04",
      title: "Mixed Sorts",
      description: "Aenean hendrerit ligula ut facilisis convallis gravida suscipit.",
      image: "Coffee15.jpg"
    }
  ];

  return (
    <div className="py-8 bg-cover bg-center min-h-screen" 
    style={{
        backgroundImage: "url('paper_bg.jpg')",
    }}
>
  {/* Header Text */}
  <div className="text-center mb-12 max-w-3xl mx-auto">
    <p className="text-gray-800 text-lg">
      Morbi eu varius neque, a ultricies sem. Fusce vitae convallis mi. Etiam dictum arcu posuere mauris 
      <span className="text-green-600"> semper accumsan</span>. Ut vel nibh a risus hendrerit efficitur. Integer ligula lacus, placerat et egestas vel, ultricies ac purus.
    </p>
  </div>

  {/* Coffee Types Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {coffeeTypes.map((coffee) => (
      <div key={coffee.id} className="flex flex-col items-center">
        {/* Number Badge and Image Container */}
        <div className="relative mb-4">
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img 
              src={coffee.image} 
              alt={coffee.title}
              className="w-full h-full object-cover max-w-full"
            />
          </div>
          <div className="absolute top-0 left-0 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold">
            {coffee.id}
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold mb-2 text-center">{coffee.title}</h3>
        <p className="text-gray-600 text-center max-w-xs">{coffee.description}</p>
      </div>
    ))}
  </div>

  {/* Go Top Button */}
  <div className="fixed bottom-8 right-8">
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-[#003366] text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
    >
      GO TOP
    </button>
  </div>
</div>

  );
};

export default CoffeeShowcase;