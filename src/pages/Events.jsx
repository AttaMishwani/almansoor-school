import React from "react";

const Events = () => {
  const events = [
    {
      title: "Annual Sports Day",
      date: "October 15, 2025",
      img: "https://source.unsplash.com/600x400/?sports,school",
    },
    {
      title: "Science Exhibition",
      date: "November 10, 2025",
      img: "https://source.unsplash.com/600x400/?science,students",
    },
    {
      title: "Cultural Fest",
      date: "December 5, 2025",
      img: "https://source.unsplash.com/600x400/?culture,festival",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
