import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutimg from "../../assets/images/home/homeAboutSec.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // starts animation when 80% of section hits viewport
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Text animation
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative min-h-screen bg-blue-500 flex justify-center items-center px-4 py-12"
    >
      <div className="container w-full z-10 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image */}
          <div ref={imgRef} className="w-full lg:w-1/2">
            <img
              src={aboutimg}
              className="w-full rounded-xl shadow-lg"
              alt="About us"
            />
          </div>

          {/* Text */}
          <div ref={textRef} className="w-full lg:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white/90 poppins">
              ABOUT US
            </h2>
            <p className="text-base md:text-lg text-white leading-relaxed">
              At <span className="font-semibold">Al Mansoor School</span>, we
              are dedicated to nurturing young minds, fostering creativity, and
              encouraging leadership. Our mission is to provide quality
              education with values, preparing students to succeed in life. We
              believe in a balanced approach where academics, character
              building, and extracurricular activities go hand in hand.
              <br />
              <br />
              Our dedicated team of teachers and staff work tirelessly to create
              a safe, inclusive, and inspiring environment where students can
              explore their potential and grow into confident individuals. With
              a focus on innovation, discipline, and respect, we strive to
              prepare the next generation of leaders who will contribute
              positively to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
