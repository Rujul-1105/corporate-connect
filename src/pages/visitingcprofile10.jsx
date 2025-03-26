import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">

      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg flex flex-col md:flex-row justify-between items-center">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-65 md:h-65 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-6 md:mb-0 md:mr-10">
          <img
            src="/company-photo.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl mb-2" style={{ fontFamily: "Times New Roman, serif" }}>
            About Guest          </h2>
          <p className="intro text-justify text-sm md:text-base">
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Field of Work:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          </p>
          <h3 className="field mt-4 text-base md:text-lg"><strong>Previous Experience:</strong></h3>
          <p className="intro text-justify text-sm md:text-base">
          </p>
        </div>
      </div>

      {/* About Company Section */}
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 mt-6 w-full md:w-3/4 rounded-lg">
        {/* Image on the left */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-gray-500 shadow-lg mb-4 md:mb-0 md:mr-6">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the right */}
        <div className="text-left w-full">
          <h2
            className="text-3xl md:text-5xl mb-4 md:mb-8"
            style={{ fontFamily: "Times New Roman, serif" }}
          >About Company       </h2>
          <p className="text-justify text-sm md:text-base">
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProfessionalProfile;