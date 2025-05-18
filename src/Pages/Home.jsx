import React from 'react'
import HeroSection from '../Components/Hero'
import AlternatingSection from '../Components/Alternate'
import FeaturedTalents from '../Components/Artist'
import UpcomingEvents from '../Components/Upevent'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import VideoSection from '../Components/Video'

function Home() {
  return (
    <div className='overflow-x-hidden bg-[#f5e6c0]'>
      <HeroSection />
      <AlternatingSection />
      <VideoSection />
      <FeaturedTalents />
      <UpcomingEvents />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
