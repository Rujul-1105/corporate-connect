import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      
      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-65 md:h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-6 md:mb-0 md:mr-10">
        <img
            src="/images/Netali.jpg" 
            alt="Netali"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
          Netali Agrawal
          </h2>
          <p className="intro text-justify text-sm md:text-base">
          Netali Agrawal is a seasoned data science professional with over a decade of experience in the IT industry. She is currently an Assistant Vice President - Data Science at Commonwealth Bank, where she drives data-driven decision-making. In addition to her corporate role, she is passionate about mentoring aspiring data scientists. 
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Field of Work:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Netali specializes in data analytics, machine learning, business intelligence, and data visualization. She has strong proficiency in SQL and a comprehensive understanding of the Software Development Life Cycle (SDLC). Her expertise enables her to develop innovative solutions to complex business challenges. 
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Previous Experience:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Before joining Commonwealth Bank, Netali worked as a Data Scientist at Infosys, focusing on supply chain analytics. She also served as a Technology Lead, gaining hands-on experience in data science and analytics. Her dedication to continuous learning is evident in her completion of a Postgraduate Diploma in Business Analytics.
          </p>
        </div>
      </div>

     {/* About Company Section */}
     <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-4 md:mb-0 md:mr-6">
  <img 
    src="/images/commonwealthbank_logo.jpg" 
    alt="Commonwealth Bank" 
    className="w-full h-full object-cover"
  />
</div>
        
        {/* Text on the right */}
        <div className="text-left md:text-right w-full">
          <h2 
            className="text-3xl md:text-5xl mb-4 md:mb-8" 
            style={{ fontFamily: "Times New Roman, serif" }}
          >
Commonwealth Bank          </h2>
          <p className="text-justify text-sm md:text-base">
          Commonwealth Bank is a major financial institution providing a wide range of services, including retail and business banking, investment management, insurance, and wealth management. The bank is known for its commitment to innovation and customer-centric solutions, making significant contributions to the financial sector.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalProfile;