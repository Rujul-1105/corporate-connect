import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      
      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-65 md:h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-6 md:mb-0 md:mr-10">
          <img
            src="/images/Deepanshu_Grover.jpeg" 
            alt="Deepanshu Grover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
            Deepanshu Grover
          </h2>
          <p className="intro text-justify text-sm md:text-base">
          Deepanshu Grover is the Director of Customer Experience Engineering for the APAC and EMEA regions at Harness, a leading software delivery platform. With over 11 years of experience in product reliability engineering and software development, Deepanshu has a strong background in enhancing product quality and ensuring customer success. He is also the author of the book <b>“7 Pieces Later: Things they should have taught you for work but they DIDN’T”.</b> 
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Field of Work:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Deepanshu specializes in product reliability engineering, customer experience, and software development. His work focuses on simplifying the software delivery process, improving product quality, and enabling engineering teams to deliver code reliably and efficiently.
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Previous Experience:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Before joining his current role, he held key positions at AppDynamics as a Technical Leader and Senior Product Specialist in Analytics & EUM - Customer Engineering, analyzing business performance in correlation with application software performance. He also worked at Informatica as a Software Engineer, developing applications like QManager and contributing to a leave tracking system, and gained experience as a Summer Intern at HCL Infosystems Ltd. His academic background includes a Master’s Degree in Software Systems with a specialization in Data Analytics from Birla Institute of Technology and Science, Pilani, and a Bachelor of Technology (B.Tech.) in Information Technology from Vellore Institute of Technology.
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg">
        {/* Image on the left */}
        <div className="w-80 h-60 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-4 md:mb-0 md:mr-6">
          <img 
            src="/images/Harness_logo.jpeg" 
            alt="Harness" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text on the right */}
        <div className="text-left w-full">
          <h2 
            className="text-3xl md:text-5xl mb-4 md:mb-8" 
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Harness
          </h2>
          <p className="text-justify text-sm md:text-base">
          Harness is a modern Continuous Delivery-as-a-Service platform that simplifies the deployment of software using AI/ML-driven automation. It enables developers and businesses to deliver applications reliably and securely.The Harness Software Delivery Platform includes product modules for every aspect of software delivery.The platform helps companies to accelerate their cloud initiatives as well as their adoption of containers and orchestration tools like Kubernetes and Amazon ECS.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalProfile;