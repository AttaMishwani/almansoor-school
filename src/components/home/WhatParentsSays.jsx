import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatParentsSays = () => {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Parent A",
      quote:
        "Al Mansoor School has given my child the confidence to excel both academically and personally.",
    },
    {
      id: 2,
      name: "Parent B",
      quote:
        "The teachers are so supportive and the environment is safe and encouraging for children.",
    },
    {
      id: 3,
      name: "Parent C",
      quote:
        "We love how the school encourages creativity and builds leadership in every student.",
    },
    {
      id: 4,
      name: "Parent D",
      quote:
        "A wonderful place for holistic learning. The staff genuinely cares for the students.",
    },
  ];

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".testimonial-card");

    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold text-black/70 mb-12 text-center poppins">
        What Parents Say
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="testimonial-card relative bg-gradient-to-b from-blue-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400 text-center"
          >
            <FaQuoteLeft className="text-blue-300 text-3xl sm:text-4xl mx-auto mb-4 sm:mb-6 opacity-60" />

            <p className="italic text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              “{item.quote}”
            </p>

            <h3 className="font-semibold text-lg sm:text-xl text-blue-500">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatParentsSays;
