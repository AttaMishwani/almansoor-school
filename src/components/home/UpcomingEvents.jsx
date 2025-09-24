import React from "react";
import science from "../../assets/images/home/upcomingevents/science.jpg";
import sports from "../../assets/images/home/upcomingevents/sports.jpg";
import culturalFest from "../../assets/images/home/upcomingevents/portrait.jpg";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  // Array of event objects
  const events = [
    {
      id: 1,
      title: "Science Fair 2025",
      desc: "A showcase of innovative projects by our talented students. A showcase of innovative projects by our talented students.",
      img: science,
    },
    {
      id: 2,
      title: "Sports Day",
      desc: "A day full of energy, competition, and teamwork on the field. A day full of energy, competition, and teamwork on the field.",
      img: sports,
    },
    {
      id: 3,
      title: "Cultural Festival",
      desc: "Celebrating diversity, creativity, and unity through performances. Celebrating diversity, creativity, and unity through performances.",
      img: culturalFest,
    },
  ];

  return (
    <section className="w-full relative bg-cover bg-center flex justify-center items-center bg-blue-500 px-4 sm:px-6 lg:px-8">
      <div className="container py-12 sm:py-16 lg:py-20 z-10 w-full max-w-[1100px]">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center poppins">
          Upcoming Events
        </h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white hover:scale-105 transform transition duration-300 ease-in-out rounded-xl p-4 flex flex-col"
            >
              {/* Event Image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-lg mb-4"
              />

              {/* Event Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">
                {event.title}
              </h3>

              {/* Event Description */}
              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                {event.desc}
              </p>

              {/* Read More Button */}
              <Link>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 text-sm sm:text-base hover:bg-blue-600 transition">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
