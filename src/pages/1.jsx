import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      
      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-65 md:h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-6 md:mb-0 md:mr-10">
        <img
            src="/images/Yadav.jpg" 
            alt="Preet Yadav"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
          Preet Yadav
          </h2>
          <p className="intro text-justify text-sm md:text-base">
          Preet Yadav is the Head of the India Innovation Ecosystem at NXP Semiconductors, leading initiatives to drive technological innovation and collaboration in the semiconductor industry. With over two decades of experience, he has made significant contributions to analog and mixed-signal design, process design kits (PDK), and electronic design automation (EDA). He is also actively involved in the engineering community, serving as the Chairperson of the IEEE Circuits and Systems Society (CASS) Delhi Chapter. 
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Field of Work:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Preet specializes in analog and mixed-signal design and verification, PDK development, and EDA. His work is focused on advancing semiconductor technologies, particularly in the automotive sector. He has successfully managed large-scale system-on-chip (SoC) technical programs and continues to contribute to innovative advancements in the industry. 
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Previous Experience:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Before joining NXP, Preet held leadership positions at Wipro as the Analog Practice Head and Distinguished Member of Technical Staff, overseeing global analog and mixed-signal practices. He also gained valuable experience at Semiconductor Complex Ltd. and Cadence Design Systems, where he worked on cutting-edge semiconductor technologies. His academic background includes a Bachelor of Technology in Electronics and Communication Engineering and a Master of Technology in VLSI Design & CAD.
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-4 md:mb-0 md:mr-6">
        <img 
          src="/images/nxp_semiconductors_logo.jpg" 
          alt="NXP Semiconductors"
          className="w-full h-full object-cover"
        />
        </div>
        
        {/* Text on the right */}
        <div className="text-left md:text-right w-full">
          <h2 
            className="text-3xl md:text-5xl mb-4 md:mb-8" 
            style={{ fontFamily: "Times New Roman, serif" }}
            >NXP Semiconductors        </h2>
          <p className="text-justify text-sm md:text-base">
          NXP Semiconductors is a global leader in secure connectivity solutions for embedded applications. The company provides innovative products that enable secure connections for smarter, safer, and more efficient systems. Serving industries such as automotive, industrial, mobile, and communication infrastructure, NXP is at the forefront of advancing technology to enhance everyday life.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalProfile;