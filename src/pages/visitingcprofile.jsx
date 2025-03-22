import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      
      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-3/4 rounded-lg flex justify-between items-center">
        {/* Text on the left */}
        <div className="text-left w-3/4">
          <h2 className="text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }} >Pallavi Saha</h2>
          <p className="intro text-justify">Pallavi Saha is the Co-Founder and CEO of RigBetel Labs, leading advancements in robotics and automation. She is passionate about fostering the robotics community and driving technological innovations.</p>
          <h3 className="field mt-4"><strong>Field of Work:</strong> </h3>
          <p className="intro text-justify">She specializes in robotics, automation, and AI-powered solutions. Her work focuses on developing advanced robotic systems, enhancing industrial automation, and supporting robotics education through initiatives like ROSCon India.</p>
          <h3 className="field mt-4"><strong>Previous Experience:</strong> </h3>
          <p className="intro text-justify">Before founding RigBetel Labs, Pallavi gained extensive experience in technology and automation. Her diverse background includes expertise in mobile applications, cloud technology, and computer networking.</p>
        </div>

        {/* Image on the right */}
        <div className="w-65 h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg ml-10">
          <img
            src="/images/Pallavi-Saha.jpg" 
            alt="Pallavi Saha"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex items-center bg-white shadow-lg p-6 mt-6 w-3/4 rounded-lg">
        {/* Image on the left */}
        <img 
          src="/images/rigbetellabs_logo.jpg" 
          alt="RigBetel Labs" 
          className="w-210 h-60 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg ml-2"
        />
        
        {/* Text on the right */}
        <div className="text-right">
  <h2 
    className="text-5xl mb-8 " 
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    RigBetel Labs
  </h2>
  <p className="text-justify ml-6 ">
    RigBetel Labs is a leading robotics and automation company based in Pune, India. 
    The company is dedicated to developing cutting-edge robotic solutions for industrial applications. 
    It also organizes ROSCon India, contributing to the growth of the robotics ecosystem. 
    Through strategic collaborations and AI-driven projects, RigBetel Labs continues to push the boundaries of innovation.
  </p>
</div>

      </div>

    </div>
  );
};

export default ProfessionalProfile;
