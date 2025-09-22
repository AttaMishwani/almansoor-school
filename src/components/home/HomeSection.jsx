import React from "react";
import hero from "../../assets/images/students.png";

const HomeSection = () => {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mb-20  relative z-10 max-w-[1100px] mx-auto ">
        <div className="max-w-[65%]  ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-500 leading-tight poppins">
            Achieve Knowledge From Cradle To Grave
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Empowering students with trust, knowledge, and professionalism.{" "}
            <br /> Join us on the journey to a brighter future.
          </p>
        </div>
      </div>
      {/* Hero Image */}
      <div className="absolute bottom-0 right-[-10%] z-1  w-[60%] md:w-[50%] lg:w-[55%]">
        <img
          src={hero}
          alt="hero"
          className="w-full object-contain pointer-events-none select-none"
        />
      </div>
      <svg
        className="absolute bottom-0 left-0 w-[100%] z-[2] mb-[-1rem]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2B7FFF"
          fill-opacity="1"
          d="M0,128L40,160C80,192,160,256,240,266.7C320,277,400,235,480,229.3C560,224,640,256,720,266.7C800,277,880,267,960,272C1040,277,1120,299,1200,266.7C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default HomeSection;
