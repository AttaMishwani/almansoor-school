import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const WhatParentsSays = () => {
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

  return (
    <section className="py-16 px-6">
      <h2 className="text-[5rem] font-bold text-black/70 mb-12 text-center poppins">
        What Parents Say
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="relative bg-gradient-to-b from-blue-50 to-white p-10 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400 text-center"
          >
            <FaQuoteLeft className="text-blue-300 text-4xl mx-auto mb-6 opacity-60" />

            <p className="italic text-gray-700 text-lg leading-relaxed mb-6">
              “{item.quote}”
            </p>

            <h3 className="font-semibold text-xl text-blue-500">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatParentsSays;
