import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../supabase/supabaseClient";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef(null);

  // ✅ Fetch all events from Supabase
  const {
    data: events = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false }); // Fetch all events (latest first)
      if (error) throw error;
      return data;
    },
  });

  // ✅ Take 3 old events (skip latest 3)
  const pastEvents = events.slice(3, 6);

  // ✅ GSAP Animations
  useEffect(() => {
    if (!pastEvents.length) return;

    const ctx = gsap.context(() => {
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

      gsap.utils.toArray(".event-item").forEach((item, i) => {
        const image = item.querySelector(".event-img");
        const text = item.querySelector(".event-text");

        gsap.from(image, {
          x: i % 2 === 0 ? -100 : 100,
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
  }, [pastEvents]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load events.</p>;

  return (
    <section
      ref={sectionRef}
      className="py-16   w-full  px-8 sm:px-4 md:px-4 lg:px-4 max-w-[1100px] mx-auto  bg-gray-50 overflow-hidden"
    >
      <h2 className="events-heading text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold text-black/70 mb-12 text-center poppins ">
        Events
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {pastEvents.length === 0 ? (
          <p className="text-center text-gray-500">No past events yet.</p>
        ) : (
          pastEvents.map((event, index) => (
            <div
              key={event.id}
              className={`event-item flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="event-img rounded-xl shadow-lg w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                />
              </div>

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
          ))
        )}
      </div>
    </section>
  );
};

export default Events;
