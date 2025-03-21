import React from 'react';

const ConferenceWebsite = () => {
  return (
    // <div className="bg-red-500">Home</div>
    <div className="font-sans">

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex flex-col xl:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <p className="text-black text-lg leading-relaxed">
                    Corporate Connect is an industry-academia interaction event
                    hosted by IIT Ropar that provides a platform to industry
                    leaders, renowned academics, and ambitious students to
                    foster meaningful connections, facilitate knowledge-sharing,
                    and inspire innovative approaches to tackle the challenges of
                    today’s dynamic industrial landscape.
                    Today’s corporations are global, complex, and interconnected,
                    crossing domains, cultures, and technologies. In this era,
                    success isn’t about being a 'jack of all trades' or a 'master of
                    one'—it’s about becoming a master of many. The modern
                    engineer or innovator must blend expertise across disciplines,
                    from mechanics to AI, to truly thrive.
                  </p>
                  <div className="mt-6">
                  </div>
                </div>

                {/* Right column - Image Collage */}
                <div className="md:w-1/2 grid grid-cols-2 gap-2 relative mr-2">
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
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              {/* <h2 className="text-3xl font-bold mb-6">Corporate Connect</h2> */}
              {/* <div className="flex items-center"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Count Every Second Until Event</h3>
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold">235</div>
                <div className="text-blue-200 text-sm">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10</div>
                <div className="text-blue-200 text-sm">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">36</div>
                <div className="text-blue-200 text-sm">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">49</div>
                <div className="text-blue-200 text-sm">Seconds</div>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">Buy Ticket</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unifying For A Better World</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Speaker Lineup</h3>
              <p className="text-gray-600 text-sm">Meet our talented and inspirational speakers</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Networking People</h3>
              <p className="text-gray-600 text-sm">Connect with industry professionals</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Amazing Venues</h3>
              <p className="text-gray-600 text-sm">Experience our state-of-the-art locations</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">All Modern Space</h3>
              <p className="text-gray-600 text-sm">Modern facilities for maximum comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Information Of Event Schedule</h2>
          <div className="flex mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium mr-2">Day 1</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium mr-2">Day 2</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium">Day 3</button>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                <div className="w-1/3">
                  <img src="/api/placeholder/320/180" alt="Conference speaker" className="h-full w-full object-cover" />
                </div>
                <div className="p-6 w-2/3">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>10:00 - 11:30</span>
                    <span className="mx-2">|</span>
                    <span>Grand Ballroom, First Floor</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Speaker's {item} Panel | Future Culture Talk 2025</h3>
                  <p className="text-gray-600 text-sm mb-4">Exploring the future of technology and its cultural impact</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-4">
                      <img src="/api/placeholder/32/32" alt="Speaker" className="w-8 h-8 rounded-full border-2 border-white" />
                      <img src="/api/placeholder/32/32" alt="Speaker" className="w-8 h-8 rounded-full border-2 border-white" />
                      <img src="/api/placeholder/32/32" alt="Speaker" className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <span className="text-gray-500 text-sm">3 Speakers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Never Miss Another Speaker Announcement</h2>
            <p className="mb-8">Subscribe to our newsletter and stay updated with all the latest information</p>
            <div className="flex flex-col sm:flex-row justify-center">
              <input type="email" placeholder="Enter your email" className="px-4 py-3 rounded-md mb-4 sm:mb-0 sm:mr-2 text-gray-800 w-full sm:w-auto" />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium w-full sm:w-auto">Subscribe</button>
            </div>
            <p className="mt-6 text-sm">www.DemoEventWebTheme.com</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ConferenceWebsite;