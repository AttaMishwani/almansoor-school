import React from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Science Exhibition 2025",
      date: "October 15, 2025",
      description:
        "Join us for our annual Science Exhibition where students showcase their creativity and innovation through exciting projects.",
      image:
        "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Sports Day",
      date: "November 3, 2025",
      description:
        "A day filled with energy, teamwork, and fun! Students will participate in various sports and athletic competitions.",
      image:
        "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Cultural Festival",
      date: "December 20, 2025",
      description:
        "Celebrate diversity and talent at our Cultural Festival featuring performances, food stalls, and student creativity.",
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-[5rem] font-bold text-black/70 mb-12 text-center poppins">
        Events
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 md:mt-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
