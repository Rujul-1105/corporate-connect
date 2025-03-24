import React from "react";

const ProfessionalProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen ">
      <div className="bd11">
      
      {/* Company Official Photo */}
      <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg">
        <img
          src="/company-photo.jpg" 
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* About Guest Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-3/4 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">About Guest</h2>
        <p><strong>Field of Work:</strong> </p>
        <p><strong>Previous Experience:</strong> </p>
      </div>

      {/* About Company Section */}
      <div className="bg-white shadow-lg p-6 mt-6 w-3/4 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">About Company</h2>
        <p> </p>
      </div>
      </div>
      <div className="bd1">
  OPEN THE WEBSITE IN FULLSCREEN ON LAPTOP
</div>
    </div>
  );
};

export default ProfessionalProfile;
