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
    <div className="py-8 bg-cover bg-center min-h-screen xl:h-[50rem]" 
      style={{
        backgroundImage: "url('paper_bg.jpg')",
      }}
    >
      {/* Header Text */}
      <div className="text-center mb-12 max-w-3xl mx-auto bg-cover bg-center min-h-[40rem] "
        style={{
          backgroundImage: "url('Coffee22.png')",
          backgroundSize: '40%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <p className="text-gray-800 text-2xl font-bold  relative top-20">
          Morbi eu varius neque, a ultricies sem. Fusce vitae convallis mi. Etiam dictum arcu posuere mauris 
          <span className="text-[#006242]"> semper accumsan</span>. Ut vel nibh a risus hendrerit efficitur. Integer ligula lacus, placerat et egestas vel, ultricies ac purus.
        </p>
      </div>

      {/* Coffee Types Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 relative bottom-40 xl:px-[5rem]">
        {coffeeTypes.map((coffee) => (
          <div key={coffee.id} className="flex flex-col items-center">
            {/* Number Badge and Image Container */}
            <div className="relative mb-4 xl:-top-40 top-2 ">
              <div className="w-60 h-60 rounded-full overflow-hidden">
                <img 
                  src={coffee.image} 
                  alt={coffee.title}
                  className="w-full h-full object-cover max-w-full  transition-transform duration-500 hover:rotate-90"
                />
              </div>
              <div className="absolute top-20 -left-10 bg-[#006242] text-white w-20 h-20 rounded-full flex items-center justify-center text-xl font-semibold xl:px-10">
                {coffee.id}
              </div>
            </div>
              
            {/* Title and Description */}
            <h3 className="text-xl font-bold xl:-mt-40 mb-2 text-center">{coffee.title}</h3>
            <p className="text-gray-600 text-center max-w-xs">{coffee.description}</p>
          </div>
        ))}
      </div>

      {/* Go Top Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#006242] text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          GO TOP
        </button>
      </div>
    </div>
  );
};

export default CoffeeShowcase;