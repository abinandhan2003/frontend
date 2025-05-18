import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Hero.css'; 
import Heroimg from '../img/Heroimg.png';

const Hero = () => {
    
        useEffect(() => {
        AOS.init();
    }, []);
    

  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden md:px-20 p-5">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        id='herobg'
    
      />
      
      {/* Content Container */}
      <div className="container mx-auto flex flex-col md:flex-row items-center z-10 px-4">
        
        {/* Left Content (w-1/2) */}
        <div className="w-full md:w-1/2 text-black mb-8 md:mb-0"
        data-aos="fade-right"
         data-aos-duration="3000"
        >
          <div className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
            Celebrating Tamil Talents
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Celebrate Tamil Talents with Chennai Talkies USA
          </h1>
          
          <p className="text-lg mb-8 max-w-md">
            Discover, promote, and celebrate Tamil talents across America through cultural events, performances, and platforms.
          </p>
          
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300">
            Explore Events
          </button>
        </div>
        
        {/* Right Content (w-1/2) */}
        <div className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-left"
        data-aos-duration="3000"
        >
          <div className="rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img 
              src={Heroimg} 
              alt="Tamil Cultural Performance" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;