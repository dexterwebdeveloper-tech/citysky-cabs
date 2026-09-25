import React from 'react';
import Carousel from './Carousel';
import AboutSection from '../pages/AboutSection';
import ServicesSection from '../pages/ServicesSection';
import WhyChooseUs from '../pages/WhyChooseUs';
import VehicleFleet from '../pages/VehicleFleet';
import PremiumFeatures from '../pages/PremiumFeatures';
import WhatWeDo from '../pages/WhatWeDo';
import Testimonials from '../pages/Testimonials';
import FAQ from '../pages/FAQ';
import LatestBlogs from '../pages/LatestBlogs';
import VideoSlider from './VideoSlider';



const HeroSection = () => {
  
  return (

    <div className="th-hero-wrapper hero-1" id="hero">
              {/* <Carousel/> */}
              <VideoSlider/>
             <AboutSection/>
             <ServicesSection/>
             <WhyChooseUs/>
             <VehicleFleet/>
             <PremiumFeatures/>
             <WhatWeDo/>
             <Testimonials/>
             <FAQ/>
             <LatestBlogs/>
    </div>
  );
};

export default HeroSection;
