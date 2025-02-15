import React from "react";
import Icon from "../components/Icon";
const About = () => {
  return (
    <div 
    className="w-full font-medium min-h-screen bg-cover relative" 
    style={{
      backgroundImage: "url('bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
    }}
  >
      <section className="bg-transparent px-6 sm:p-10 text-left w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[90%] mx-auto mt-20 pt-40 rounded-lg">
        {/* About Us Content (Text + Image) */}
        <div className="flex flex-col xl:flex-row items-center mb-10 pt-10 w-full">
          {/* Left Side: Text Content */}
          <div className="flex-1 mb-6 xl:mb-0 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006242] mb-4 sm:mb-6">
              About Us
            </h1>
            <p className="text-lg sm:text-lg md:text-lg lg:text-lg text-gray-700 sm:mb-6 leading-relaxed font-raleway">
              Curabitur imperdiet varius lacus, id placerat purus vulputate non.
              Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
              gravida vel porttitor et, pretium ac sapien.
              <br />
              <br />
              Curabitur imperdiet varius lacus, id placerat purus vulputate non.
              Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
              gravida vel porttitor et, pretium ac sapien.
              <br />
              <br />
              Curabitur imperdiet varius lacus, id placerat purus vulputate non.
              Fusce in felis vel arcu maximus placerat eu ut arcu. Ut nunc ex,
              gravida vel porttitor et, pretium ac sapien.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-end">
  <img
    src="AboutImage.jpg"
    alt="KblCoffee-image"
    className="xl:w-[35vw] sm:w-[60vw] md:w-[78vw] lg:w-[76vw] h-[40vh] sm:h-[45vh] md:h-[50vh] rounded-lg object-cover"
  />
</div>

        </div>

        {/* Core Value, Vision, and Mission Cards */}
        <div className="flex xl:flex-row flex-col md:flex-col justify-between w-full gap-6 font-raleway xl:h-[20rem] mt-40 mb-20">
          {/* Core Value Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ">
          <Icon name=" icon-increase-in-value-svgrepo-com" className="text-5xl text-[#006242]" />
            <h3 className="text-2xl font-bold text-[#006242] mb-3">Core Value</h3>
            <p className="text-gray-600 text-lg">
              My core values are integrity, commitment to excellence, and a passion for innovation.
              I always strive to deliver high-quality work that adds value to users and businesses.
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ">
          <Icon name=" icon-Coffee9-icon" className="text-5xl text-[#006242]" />
            <h3 className="text-xl font-semibold text-[#006242] mb-3">Vision</h3>
            <p className="text-gray-600 text-lg">
              My vision is to create technology solutions that empower individuals and organizations,
              driving positive change in the world through impactful digital products.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <Icon name=" icon-mission-svgrepo-com" className="text-5xl text-[#006242]" />
            <h3 className="text-xl font-semibold text-[#006242] mb-3">Mission</h3>
            <p className="text-gray-600 text-lg">
              My mission is to continue building scalable, user-centric applications that make a difference
              while constantly learning and growing in the ever-evolving tech space.
            </p>
          </div>
        </div>
        <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#006242] text-white p-4 rounded-full hover:bg-gray-800 transition-colors"
        >
          GO TOP
        </button>
      </div>
      </section>
    </div>
  );
};

export default About;
