import React from 'react';
import Timeline from '../components/timeline'
import Carousel from '../components/carousel';
const ConferenceWebsite = () => {
  return (
    <div className="font-sans">

      <Carousel />
      {/* About Section */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex flex-col xl:flex-row gap-8 items-center">


              
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10"></div>
          </div>
        </div>
      </section>

      <Timeline />
    </div>
  );
};

export default ConferenceWebsite;