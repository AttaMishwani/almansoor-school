import React from "react";
import hero from "../../assets/images/students.png";

const HomeSection = () => {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mb-12 md:mb-20 relative z-10 max-w-[1100px] mx-auto px-4">
        <div className="max-w-full md:max-w-[65%]">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-blue-500 leading-tight poppins">
            Achieve Knowledge From Cradle To Grave
          </h1>
          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Empowering students with trust, knowledge, and professionalism.{" "}
            <br className="hidden sm:block" /> Join us on the journey to a
            brighter future.
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute bottom-0 right-[-20%] sm:right-[-10%] w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%] z-0">
        <img
          src={hero}
          alt="hero"
          className="w-full object-contain pointer-events-none select-none"
        />
      </div>

      {/* Wave Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full z-[2] mb-[-1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2B7FFF"
          fillOpacity="1"
          d="M0,128L40,160C80,192,160,256,240,266.7C320,277,400,235,480,229.3C560,224,640,256,720,266.7C800,277,880,267,960,272C1040,277,1120,299,1200,266.7C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HomeSection;
