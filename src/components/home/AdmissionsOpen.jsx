import React from "react";
import { Link } from "react-router-dom";

const AdmissionsOpen = () => {
  return (
    <section className="w-full flex justify-center items-center px-4 sm:px-6">
      <div className="bg-blue-500 py-12 sm:py-16 px-4 sm:px-6 md:px-10 text-white text-center rounded-2xl shadow-lg w-full max-w-[1100px] my-12 sm:my-16">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Admissions are Now Open!
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Join a community of passionate learners and build your future with
          <span className="font-semibold"> Al Mansoor Institute</span>. Limited
          seats are available — apply today and secure your spot!
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/admissioninfo"
            className="bg-blue-500 border-2 border-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsOpen;
