import React from "react";
import aboutimg from "../../assets/images/home/homeAboutSec.jpg";

const AboutSection = () => {
  return (
    <section className="w-full relative min-h-screen bg-blue-500 flex justify-center items-center px-4 py-12">
      {/* Background formulas */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <p className="absolute top-10 left-8 text-4xl font-bold text-white/10 rotate-3 ibm-plex-serif-semibold italic">
          E = mc²
        </p>
        <p className="absolute top-1/4 left-1/5 text-3xl font-bold text-white/10 -rotate-6 ibm-plex-serif-semibold italic">
          F = ma
        </p>
        <p className="absolute bottom-16 left-14 text-5xl font-bold text-white/10 rotate-12 ibm-plex-serif-semibold italic">
          πr²
        </p>
        <p className="absolute top-1/2 right-12 text-4xl font-bold text-white/10 -rotate-12 ibm-plex-serif-semibold italic">
          a² + b² = c²
        </p>
        <p className="absolute bottom-24 right-20 text-3xl font-bold text-white/10 rotate-2 ibm-plex-serif-semibold italic">
          ∑x / n
        </p>
        <p className="absolute top-1/3 right-1/3 text-4xl font-bold text-white/10 -rotate-8 ibm-plex-serif-semibold italic">
          E = hf
        </p>
        <p className="absolute bottom-8 right-1/4 text-3xl font-bold text-white/10 rotate-6 ibm-plex-serif-semibold italic">
          v = d / t
        </p>
        <p className="absolute top-20 right-1/4 text-3xl font-bold text-white/10 rotate-9 ibm-plex-serif-semibold italic">
          W = F·d
        </p>
        <p className="absolute bottom-1/3 left-1/3 text-4xl font-bold text-white/10 -rotate-5 ibm-plex-serif-semibold italic">
          p = mv
        </p>
        <p className="absolute top-1/6 left-1/2 text-3xl font-bold text-white/10 rotate-7 ibm-plex-serif-semibold italic">
          KE = ½mv²
        </p>
      </div>

      {/* Content */}
      <div className="container w-full z-10 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={aboutimg}
              className="w-full rounded-xl shadow-lg"
              alt="About us"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-left">
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
