import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import trust from "../../assets/images/icons/relationship.png";
import teachers from "../../assets/images/icons/businessman.png";
import growth from "../../assets/images/icons/growth (1).png";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Proven Excellence",
      desc: "We provide reliable and transparent education that builds long-term trust with parents and students.",
      img: trust,
      bg: "bg-blue-500",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "Professional Teachers",
      desc: "Our skilled teachers ensure professionalism and passion in every classroom.",
      img: teachers,
      bg: "bg-blue-500",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Growth Oriented",
      desc: "We focus on overall student growth, encouraging learning, sports, and extracurricular activities.",
      img: growth,
      bg: "bg-blue-500",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const ctx = gsap.context(() => {
      const elems = gsap.utils.toArray(".why-card"); // selects only existing DOM nodes
      if (!elems.length) return;

      // initial state (so they are hidden before scroll)
      gsap.set(elems, { autoAlpha: 0, y: 40 });

      // reveal animation
      gsap.to(elems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          // markers: true, // <-- enable this to debug trigger positions
        },
      });
    }, sectionRef);

    // cleanup on unmount / strict mode
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 max-w-6xl mx-auto px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black/70 mb-10 text-center poppins">
        Why Choose Us?
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bg} why-card rounded-xl p-6 py-12 shadow-lg shadow-blue-400/40 
              hover:shadow-2xl hover:shadow-blue-400/70 
              hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer`}
          >
            <img
              src={card.img}
              className="w-14 h-14 md:w-16 md:h-16 mb-6 transition-transform duration-300 group-hover:rotate-6"
              alt={card.title}
            />
            <h3
              className={`text-2xl md:text-3xl font-semibold mb-4 ${card.textColor}`}
            >
              {card.title}
            </h3>
            <p className="text-white text-base md:text-lg">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
