import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AlternatingSection = () => {

         useEffect(() => {
            AOS.init();
        }, []);
        
  return (
    <div className="container mx-auto py-12 px-5 bg-[#f5e6c0] w-full md:px-20">
      {/* First Section - Similar to the image provided */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="w-full md:w-1/2 pr-0 md:pr-8 "
        
        data-aos="fade-right"
        data-aos-duration="2000"
        
        >
          <div className="bg-white shadow text-yellow-800 inline-block px-4 py-2 rounded-md mb-4">
            Welcome to Chennai Talkies USA
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
            Bringing Tamil Culture to America
          </h2>
          
          <div className="border-t border-gray-300 w-full mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            Chennai Talkies USA is dedicated to discovering, promoting, and celebrating
            Tamil talents across the United States. From traditional music and dance to
            modern stand-up comedy and debate, we create platforms for artists to shine.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-medium py-2 px-6 rounded border border-yellow-600 transition duration-300">
              Learn More About Us
            </button>
            <button className="bg-white hover:bg-gray-100 text-red-800 font-medium py-2 px-6 rounded border border-red-800 transition duration-300">
              Showcase Your Talent
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0"
        data-aos="fade-left"
        data-aos-duration="2000"
        >
          <img 
            src={img1}
            alt="Tamil cultural performance" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Second Section - Alternating design */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-16">
        <div className="w-full md:w-1/2 pl-0 md:pl-8"
        data-aos="fade-right"
        data-aos-duration="2000"
        >
          <div className="bg-red-100 text-red-800 inline-block px-4 py-2 rounded-md mb-4">
            Our Cultural Events
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
            Celebrating Heritage Through Performance
          </h2>
          
          <div className="border-t border-gray-300 w-full mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            Experience the richness of Tamil culture through our diverse events. From classical
            music concerts and dance performances to modern theatrical productions and film
            screenings, we bring authentic Tamil experiences to American audiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded transition duration-300">
              View Upcoming Events
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0"
        data-aos="fade-left"
        data-aos-duration="2000"
        >
          <img 
            src={img2} 
            alt="Tamil cultural event" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Third Section - Back to original layout */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-0 md:pr-8"
        data-aos="fade-right"
        data-aos-duration="2000"
        >
          <div className="bg-blue-100 text-blue-800 inline-block px-4 py-2 rounded-md mb-4">
            Artist Showcase
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
            Highlighting Tamil Talent
          </h2>
          
          <div className="border-t border-gray-300 w-full mb-6"></div>
          
          <p className="text-gray-700 mb-6">
            Our platform provides visibility to talented artists from the Tamil community
            across the United States. Whether you're a musician, dancer, actor, or comedian,
            Chennai Talkies USA offers you the opportunity to showcase your skills and
            connect with a wider audience.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300">
              Meet Our Artists
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0"
        data-aos="fade-left"
        data-aos-duration="2000"
        >
          <img 
            src={img3}
            alt="Tamil artist showcase" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AlternatingSection;