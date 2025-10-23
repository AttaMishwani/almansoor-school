import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import science from "../../assets/images/home/upcomingevents/science.jpg";
import sports from "../../assets/images/home/upcomingevents/sports.jpg";
import culturalFest from "../../assets/images/home/upcomingevents/portrait.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../UiBlocks/Loader";
import { supabase } from "../../supabase/supabaseClient";

gsap.registerPlugin(ScrollTrigger);

const UpcomingEvents = () => {
  const sectionRef = useRef(null);

  // const events = [
  //   {
  //     id: 1,
  //     title: "Science Fair 2025",
  //     desc: "A showcase of innovative projects by our talented students. A showcase of innovative projects by our talented students.",
  //     img: science,
  //   },
  //   {
  //     id: 2,
  //     title: "Sports Day",
  //     desc: "A day full of energy, competition, and teamwork on the field. A day full of energy, competition, and teamwork on the field.",
  //     img: sports,
  //   },
  //   {
  //     id: 3,
  //     title: "Cultural Festival",
  //     desc: "Celebrating diversity, creativity, and unity through performances. Celebrating diversity, creativity, and unity through performances.",
  //     img: culturalFest,
  //   },
  // ];

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: false })
      .limit(3);

    if (error) {
      console.error("Error fetching events:", error);
      return [];
    }

    return data;
  };
  const {
    data: events = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["latest-events"],
    queryFn: fetchEvents,
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // heading
      gsap.from(".upcoming-heading", {
        y: 40,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".upcoming-heading",
          start: "top 85%",
          // markers: true,
        },
      });

      // collect cards (guaranteed to exist after render)
      const cards = gsap.utils.toArray(".upcoming-card");

      // initial state
      gsap.set(cards, { autoAlpha: 0, y: 30, scale: 0.98 });

      // animate each card when it scrolls into view
      cards.forEach((card, i) => {
        gsap.to(card, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
            // markers: true, // enable for debugging
          },
        });
      });

      // fallback: if no ScrollTrigger (rare), play a simple mount animation
      if (!ScrollTrigger) {
        gsap.to(cards, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      // extra cleanup: remove any lingering triggers
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  if (isError) return <>Error fetching events</>;
  if (isLoading) return <Loader />;
  return (
    <section
      ref={sectionRef}
      className="w-full relative bg-cover bg-center flex justify-center items-center bg-blue-500 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="px-8 sm:px-4 md:px-4 lg:px-4 py-12 sm:py-16 lg:py-20 z-10 w-full max-w-[1100px]">
        {/* Heading */}
        <h2 className="upcoming-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center poppins">
          Upcoming Events
        </h2>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <article
              key={event.id}
              className="upcoming-card bg-white hover:scale-105 transform transition duration-300 ease-in-out rounded-xl p-4 flex flex-col shadow-lg"
            >
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-48 sm:h-56 lg:h-60 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">
                {event.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base flex-grow">
                {event.description.slice(0, 100)}...
              </p>

              <Link to={`/events/${event.id}`}>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 text-sm sm:text-base hover:bg-blue-600 transition">
                  Read More
                </button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
