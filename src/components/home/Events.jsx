import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".events-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".events-heading",
          start: "top 85%",
        },
      });

      // Animate each event block
      gsap.utils.toArray(".event-item").forEach((item, i) => {
        const image = item.querySelector(".event-img");
        const text = item.querySelector(".event-text");

        gsap.from(image, {
          x: i % 2 === 0 ? -100 : 100, // alternate direction
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });

        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 bg-gray-50 overflow-hidden"
    >
      {/* Heading */}
      <h2 className="events-heading text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold text-black/70 mb-12 text-center poppins">
        Events
      </h2>

      {/* Events List */}
      <div className="max-w-6xl mx-auto space-y-16">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`event-item flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={event.image}
                alt={event.title}
                className="event-img rounded-xl shadow-lg w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
              />
            </div>

            {/* Text */}
            <div className="event-text w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-2">
                {event.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">
                {event.date}
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
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
