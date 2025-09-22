import React from "react";
import science from "../../assets/images/home/upcomingevents/science.jpg";
import sports from "../../assets/images/home/upcomingevents/sports.jpg";
import culturalFest from "../../assets/images/home/upcomingevents/portrait.jpg";
import kids from "../../assets/images/home/upcomingevents/kids.jpg";
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
      desc: "A day full of energy, competition, and teamwork on the field.A day full of energy, competition, and teamwork on the field.teamwork",
      img: sports,
    },
    {
      id: 3,
      title: "Cultural Festival",
      desc: "Celebrating diversity, creativity, and unity through performances.Celebrating diversity, creativity, and unity through performances.",
      img: culturalFest,
    },
  ];

  return (
    <section className="w-[100%] relative  bg-cover bg-center  flex justify-center items-center bg-blue-500">
      <div className="absolute inset-0 "></div>

      <div className="container py-20 z-10 w-[100%] max-w-[1100px]">
        {" "}
        <h2 className="text-[5rem] font-bold text-white mb-10 text-center poppins">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white 
            hover:scale-105 transform transition duration-300 ease-in-out rounded-xl p-4"
            >
              {/* Event Image */}
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              {/* Event Title */}
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                {event.title}
              </h3>
              {/* Event Description */}
              <p className="text-gray-600">{event.desc}</p>

              <Link>
                <button className="bg-blue-400 text-white py-1 px-2 rounded-md mt-3">
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
