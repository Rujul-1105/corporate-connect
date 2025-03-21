import React from "react";
import './majorEvents.css';

const events = [
  {
    title: "Director's Meet",
    description:
      "Engage in a high-level dialogue with the Director of IIT Ropar, discussing strategic collaborations and industry-academia partnerships.",
    icon: "👤",
  },
  {
    title: "Lab Visits",
    description:
      "Get an exclusive look at state-of-the-art research at IIT Ropar. Interact with leading professors about ongoing projects and innovations.",
    icon: "🖥️",
  },
  {
    title: "Panel Discussion",
    description:
      "Join industry pioneers and academic experts in discussions on transformative trends, key challenges, and the synergy between theory and practice.",
    icon: "💬",
  },
  {
    title: "Student Projects Exhibition",
    description:
      "Explore innovative projects developed by IIT Ropar's students, gaining insights into emerging talent and potential recruitment opportunities.",
    icon: "💡",
  },
];

const MajorEvents = () => {
  return (
    <div className="container mx-auto p-6 mb-5">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        Major Events
      </h1>
      <div className="grid gap-10 grid-cols-2">
        {events.map((event, index) => (
          <div
            key={index}
            className=" majorEventbg p-10 rounded-lg shadow-md flex items-start"
          >
            <span className="text-3xl mr-4">{event.icon}</span>
            <div>
              <h2 className="text-2xl font-semibold text-blue-500 mb-2">
                {event.title}
              </h2>
              <p className="text-gray-700 text-lg">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorEvents;