import React from 'react';
import Timeline from '../components/timeline'
import Carousel from '../components/carousel';
import MajorEvents from '../components/majorEvents';
import Footer from '../components/Footer1';
import Slideshow from '../components/CarouselCompany';
import Vct from '../components/vct'

const ConferenceWebsite = () => {
  return (
    <div className="font-sans">

      <div className='grid grid-cols-3 gap-2 w-[70vw] m-auto mt-10 mb-10'>
      <Vct />
      <Vct />
      <Vct />
      <Vct />
      <Vct />
      <Vct />
      <Vct />
      <Vct />
      <Vct />
      <Vct />

      </div>

      <Footer/>

    </div>
  );
};

export default ConferenceWebsite;