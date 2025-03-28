import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      
      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-65 md:h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-6 md:mb-0 md:mr-10">
        <img
            src="/images/SurjyaMahapotra.jpeg" 
            alt="Surjya Mahapotra"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
          Surjya Narayan Mohapatro
          </h2>
          <p className="intro text-justify text-sm md:text-base">
          Surjya Narayan Mohapatro is the Vice President at Standard Chartered Bank, with over two decades of experience in the financial services industry. He is a seasoned leader in Valuation Control, Independent Price Verification (IPV), Product Control, and Valuation Adjustment, with deep domain expertise in Rates and Credit Default Swaps (CDS). He is also passionate about mentoring finance students and professionals.
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Field of Work:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Surjya specializes in valuation control, risk analytics, capital planning, and treasury management. He ensures accurate valuation of complex financial instruments and oversees financial reporting for global markets.
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Previous Experience:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Before joining Standard Chartered, Surjya held leadership roles at JPMorgan Chase, leading financial reporting and valuation control; Deutsche Bank, specializing in valuation and independent price verification; and Credit Suisse, where he worked on risk management and product control. His academic background includes a Master of Business Administration (MBA) in Finance and Systems from Xavier Institute of Management (XIM Bhubaneswar) and a Bachelor of Law (LLB) from Law College, Cuttack (2002–2005).
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg">
        {/* Image on the left */}
        <div className="w-80 h-60  rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-4 md:mb-0 md:mr-6">
  <img 
    src="/images/standardchartered_logo.jpeg" 
    alt="Standard Chartered Bank" 
    className="w-full h-full object-cover"
  />
</div>
        
        {/* Text on the right */}
        <div className="text-left w-full">
          <h2 
            className="text-3xl md:text-5xl mb-4 md:mb-8" 
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Standard Chartered Bank
          </h2>
          <p className="text-justify text-sm md:text-base">
          Standard Chartered is a British multinational bank operating in over 60 countries, focused on Asia, Africa, and the Middle East. The bank offers banking, wealth management, and financial services, dedicated to driving commerce and prosperity globally.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalProfile;