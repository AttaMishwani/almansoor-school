import React from "react";

const Commitments = () => {
  return (
    <section className="w-full relative py-10 pt-20 bg-blue-500 flex justify-center items-center">
      <div className="container w-full max-w-[1100px] flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-[6rem] justify-between px-4">
        {/* Heading */}
        <div className="text-center md:text-left">
          <h2 className="poppins text-2xl md:text-4xl font-bold text-white">
            MISSION & COMMITMENTS
          </h2>
        </div>

        {/* Mission */}
        <div className="text-center md:text-left">
          <p className="text-white text-sm md:text-base leading-relaxed">
            Happy Palace Group of Schools’ mission is to provide enlightened
            education and examination services to the students. The future of a
            nation depends mainly on its educational system. Education sets the
            path for development and helps to achieve the desired goals.
          </p>
        </div>

        {/* Commitments */}
        <div className="text-center md:text-left">
          <p className="text-white text-sm md:text-base leading-relaxed">
            Committed to excellence in developing dynamic personalities to
            accept the challenges of modern era. Committed in creating expertise
            and advancement in every field of life serving mankind and being
            patriotic Pakistani citizens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
