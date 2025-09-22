import React from "react";
import { Link } from "react-router-dom";

const AdmissionsOpen = () => {
  return (
    <section className="w-[100%] flex justify-center items-center">
      {" "}
      <section className="bg-blue-500 py-16 px-6  text-white text-center rounded-2xl shadow-lg w-[100%] max-w-[1100px]  my-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Admissions are Now Open!
        </h2>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Join a community of passionate learners and build your future with
          <span className="font-semibold"> Al Mansoor Institute</span>. Limited
          seats are available — apply today and secure your spot!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={"/admissioninfo"}
            className="bg-blue-500 border-2 border-white font-semibold px-8 py-4 rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </section>
  );
};

export default AdmissionsOpen;
