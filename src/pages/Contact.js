import React, { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaTiktok,FaInstagram } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact= () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone:'',
        message: '',
    });
    const [isSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Call EmailJS send function
      emailjs
        .sendForm("service_77uejgm", "bwanakweli4ever", e.target, "T0pFpR16bzX1qUc5n")
        .then(
          (result) => {
            alert("Message Sent Successfully!");
            console.log(result.text);
          },
          (error) => {
            alert("Error: Message not sent!");
            console.log(error.text);
          }
        );
    };

    return (
        <div className="w-full mx-auto md:mt-40 xl:mt-60 mb-20 mt-60 sm:mt-[40rem] p-6 bg-white shadow-sm rounded-md flex flex-col flex-col-reverse xl:flex-row lg:flex-row gap-8 font-medium">
        {/* Form Section */}
        <div className="lg:w-2/3 w-full px-4 sm:px-10 md:px-16 mx-auto">
          {isSent && (
            <p className="text-green-500 text-center mb-4">
              Thank you! Your message has been sent.
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-40 bg-[#006242] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      
        {/* Information Section */}
        <div className="lg:w-1/3  p-6 rounded-md  flex flex-col justify-center xl:h-[60vh] md:h-[30vh] sm:h-[20vh] h-[40vh] my-10  xl:my-10 ">
        <div className='space-y-8 mb-40'>
          <h1 className="text-6xl font-bold text-[#006242]">Get in Touch with KBL Coffee</h1>
          <p className="text-gray-700 text-base ">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
          <div className='grid grid-cols-5 gap-5'>
           {/* WhatsApp */}
      <a
        href="https://wa.me/250787255672"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 text-3xl hover:text-green-600 transition hover:rounded-full"
      >
        <FaWhatsapp />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-3xl hover:text-blue-700 transition"
      >
        <FaLinkedin />
      </a>

      {/* Tiktok */}
      <a
        href="https://https://www.tiktok.com/@kbl.coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-3xl hover:text-blue-600 transition"
      >
        <FaTiktok />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/kbl.coffee/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 text-3xl hover:text-pink-600 transition"
      >
        <FaInstagram />
        </a>
        </div>
          </div> 
        </div>
        <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#006242] text-white p-4 rounded-full hover:bg-green-600 transition-colors"
        >
          GO TOP
        </button>
      </div>
     
      </div>
      
    );
};

export default Contact;
