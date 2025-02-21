import React from "react";
import Icon from "../components/Icon";
const About = () => {
  return (
    <div 
    className="min-w-full font-medium min-h-screen bg-cover relative " 
    style={{
      backgroundImage: "url('/bg.png')",
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
    }}
  >
      <section className="bg-transparent px-6 sm:p-10 text-left w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[90%] mx-auto mt-20 pt-40 rounded-lg">
        {/* About Us Content (Text + Image) */}
        <div className="flex flex-col xl:flex-row items-center mb-10 pt-10 w-full">
          {/* Left Side: Text Content */}
          <div className="flex-1 mb-6 xl:mb-0 w-full">
            <h4 className="text-lg sm:text-lg md:text-lg lg:text-lg font-bold text-[#006242] mb-2 sm:mb-2">
            About KBL Coffee
            </h4>
            <p className="text-lg sm:text-lg md:text-lg lg:text-xl text-gray-700 sm:mb-6 leading-relaxed font-raleway">
            At KBL Coffee, we are more than just coffee roasters—we are storytellers, change makers, 
            and advocates for ethical sourcing. Rooted in a deep passion for specialty coffee, 
            we take immense pride in sourcing our beans exclusively from smallholder women farmers in Rwanda. 
            Our mission goes beyond delivering a rich and invigorating coffee experience; we are committed to empowering the very hands that cultivate our beans.
            </p>
              <br />
              
              <h4 className="text-lg sm:text-lg md:text-lg lg:text-lg font-bold text-[#006242] mb-2 sm:mb-2">Our Commitment to Women Farmers</h4>
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl text-gray-700 sm:mb-6 leading-relaxed font-raleway">
              We believe that every cup of coffee should tell a story—one of resilience, dedication, 
              and opportunity. By working directly with women-led coffee cooperatives, 
              we ensure that these farmers receive fair compensation, access to resources, 
              and a platform to showcase their exceptional craft. Through sustainable partnerships, 
              we support their livelihoods, helping to build stronger communities and create a more equitable coffee industry.
              </p>
              <br />
              
              <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-lg font-bold text-[#006242] mb-2 sm:mb-2">Sustainability & Quality in Every Bean</h4>
              <p className="text-lg sm:text-lg md:text-lg lg:text-xl text-gray-700 sm:mb-6 leading-relaxed font-raleway">
              At KBL Coffee, we embrace sustainability at every step of our journey. 
              Our sourcing practices prioritize organic and environmentally friendly farming methods, 
              ensuring that each batch of coffee not only tastes extraordinary but is also cultivated with care for the land and future generations. 
              We meticulously roast our beans to bring out their unique flavor profiles, delivering a smooth, aromatic, 
              and full-bodied coffee experience that truly honors the work of our farmers.
              </p>
            <br/>
            
           
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-end">
  <img
    src="AboutImage.jpg"
    alt="KblCoffee-image"
    className="xl:w-[35vw] sm:w-[60vw] md:w-[78vw] lg:w-[76vw] h-[40vh] sm:h-[45vh] md:h-[50vh] xl:h-[90vh] rounded-lg object-cover"
  />
</div>

        </div>

        {/* Core Value, Vision, and Mission Cards */}
        <div className="flex xl:flex-row flex-col md:flex-col justify-between w-full gap-6 font-raleway xl:h-[20rem] mt-40 mb-80">
          {/* Core Value Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg h-[40rem] ">
          <Icon name=" icon-increase-in-value-svgrepo-com" className="text-5xl text-[#006242]" />
            <h3 className="text-2xl font-bold text-[#006242] mb-3">Core Value</h3>
            <p className="text-gray-600 text-lg">
            At KBL Coffee, we are committed to quality, sustainability, 
            and empowerment. Our values are deeply rooted in:<br/>
            <span>
            ✅ <span className="font-bold text-[#006242]">Fair Trade & Ethical Sourcing –</span> We ensure that every cup of coffee supports fair wages and sustainable farming practices.
            <br/>
            ✅ <span className="font-bold text-[#006242]">Women Empowerment –</span> We actively support and uplift women in coffee farming and production, 
            fostering economic independence and leadership opportunities.
            <br/>
            ✅<span className="font-bold text-[#006242]"> Excellence & Authenticity –</span>From sourcing to roasting, 
            we maintain the highest standards to deliver an exceptional coffee experience.
            </span>
            </p>
          </div>

          {/* Vision Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg ">
          <Icon name=" icon-Coffee9-icon" className="text-5xl text-[#006242]" />
            <h3 className="text-xl font-semibold text-[#006242] mb-3">Vision</h3>
            <p className="text-gray-600 text-lg">
            To create a world where coffee is more than just a beverage—it’s a force for change. We envision a future where ethical sourcing, 
            fair trade, 
            and women’s empowerment are the foundation of a thriving coffee industry.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <Icon name=" icon-mission-svgrepo-com" className="text-5xl text-[#006242]" />
            <h3 className="text-xl font-semibold text-[#006242] mb-3">Mission</h3>
            <p className="text-gray-600 text-lg">
            Our mission is to craft premium-quality coffee while making a meaningful impact on the lives of coffee farmers, 
            especially women. Through sustainable practices and direct partnerships, 
            we ensure that every purchase supports a better future for coffee-growing communities.
            </p>
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
      </section>
    </div>
  );
};

export default About;
