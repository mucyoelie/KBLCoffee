import React from "react";

const SubContact = () => {
  const subContact = [
    {
      id: "01",
      title: "Welcome",
      description: "Kigali, KG 622 ST Kimihurura",
    },
    {
      id: "02",
      title: "Call",
      description: "+250787255672",
    },
    {
      id: "03",
      title: "Write",
      description: "info@kbl.coffee",
    },
  ];

  return (
    <div className=" w-full h-auto bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {subContact.map((contact) => (
          <div
            key={contact.id}
            className="flex flex-col items-center p-6 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-[#4D7F43] text-white rounded-full mb-4 text-lg font-bold">
              {contact.id}
            </div>
            <h1 className="text-xl md:text-2xl text-[#4D7F43] font-bold mb-2">
              {contact.title}
            </h1>
            <p className="text-gray-600 text-center text-sm md:text-base">
              {contact.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubContact;
