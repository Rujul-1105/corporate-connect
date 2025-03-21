import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const timelineData = [
  {
    title: "COLLABORATION",
    description:
      "Develop a collaborative platform for seamless knowledge exchange between industry professionals and academia.",
    icon: <UserGroupIcon className="w-8 h-8" />,
  },
  {
    title: "FORESIGHT",
    description:
      "Discuss emerging industrial challenges and innovations, delivering valuable insights to students while staying updated with the latest trends.",
    icon: <LightBulbIcon className="w-8 h-8" />,
  },
  {
    title: "MENTORSHIP",
    description:
      "Identify and mentor future leaders through meaningful engagement, while enhancing your company's presence at IIT Ropar.",
    icon: <AcademicCapIcon className="w-8 h-8" />,
  },
  {
    title: "INNOVATION",
    description:
      "Encourage innovative thinking and multidisciplinary problem-solving to effectively address the complexities of a rapidly evolving industrial landscape.",
    icon: <PuzzlePieceIcon className="w-8 h-8" />,
  },
  {
    title: "EXPERTISE",
    description:
      "Showcase your company’s expertise by sharing insights on industry trends and innovations. Establish your organization as a pioneer in its field.",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
  },
];

function Timeline() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative px-6 py-10"
      style={{
        backgroundImage: `url('/images/spiral_backdrop.jpg')`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Engagement Timeline
        </h2>

        {/* Timeline Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center bg-white/90 p-6 rounded-lg shadow-md transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2"
            >
              {/* Circle Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
