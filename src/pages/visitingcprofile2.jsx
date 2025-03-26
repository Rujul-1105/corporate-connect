import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      
      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-65 md:h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-6 md:mb-0 md:mr-10">
        <img
            src="/images/mehul-gupta.jpg" 
            alt="Mehul Gupta"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
          Mehul Gupta
          </h2>
          <p className="intro text-justify text-sm md:text-base">
          Mehul Gupta is a Director at PwC India, specializing in Economics and Public Policy. With over 12 years of experience, he provides strategic and technical guidance to government and private sector clients, focusing on public finance, financial inclusion, and impact assessment.
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Field of Work:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Mehul's expertise lies in public policy, government relations, regulatory affairs, and data analytics. He has contributed to discussions on fiscal policy, economic development, and public financial management, authoring articles on topics such as avoiding the middle-income trap and enhancing public finance efficiency.
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Previous Experience:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          Prior to his current role, Mehul served as an Economist at PwC India, where he gained extensive experience in public finance and policy advisory services. His academic background includes studies at the Delhi School of Economics, equipping him with a strong foundation in economic theory and policy analysis.
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-4 md:mb-0 md:mr-6">
  <img 
    src="/images/pwc_india_logo.jpg" 
    alt="PwC India" 
    className="w-full h-full object-cover"
  />
</div>
        
        {/* Text on the right */}
        <div className="text-left md:text-right w-full">
          <h2 
            className="text-3xl md:text-5xl mb-4 md:mb-8" 
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            PwC India
          </h2>
          <p className="text-justify text-sm md:text-base">
          PwC India is a leading professional services firm offering a range of services in assurance, advisory, and tax to clients across various industries. The firm's Economics and Public Policy practice focuses on providing strategic insights and solutions to complex policy challenges, aiming to drive sustainable economic growth and development. PwC India collaborates with government bodies, private enterprises, and international organizations to address critical issues in public finance, regulatory affairs, and economic policy.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalProfile;