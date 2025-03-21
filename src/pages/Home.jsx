import React from 'react';
import Timeline from '../components/timeline'
import Carousel from '../components/carousel';
const ConferenceWebsite = () => {
  return (
    // <div className="bg-red-500">Home</div>
    <div className="font-sans">

      <Carousel />
      {/* About Section */}
      <section className="py-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex flex-col xl:flex-row gap-8 items-center">


                {/* Right column - Image Collage */}
                {/* <div className="md:w-1/2 grid grid-cols-2 gap-2 relative mr-2">
                  <img
                    src="/images/1.png"
                    alt="Festival performer"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/images/2.png"
                    alt="Festival performer"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />

                  <img
                    src="/images/3.png"
                    alt="Festival performer"
                    className="w-full h-40 object-cover rounded-lg translate-x-[10%] shadow-md md:translate-x-1/2"
                  />
                  <img
                    src="/images/4.png"
                    alt="Festival performer"
                    className="w-full h-40 object-cover rounded-lg shadow-md translate-x-[10%] md:translate-x-1/2"
                  />
                </div> */}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              {/* <h2 className="text-3xl font-bold mb-6">Corporate Connect</h2> */}
              {/* <div className="flex items-center"></div> */}
            </div>
          </div>
        </div>
      </section>

      <Timeline />
    </div>
  );
};

export default ConferenceWebsite;