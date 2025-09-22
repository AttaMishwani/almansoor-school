import React from "react";

const ApplyNow = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brandBlue">
          Join Al Mansoor School
        </h2>

        <div className="mx-auto w-24 h-1 bg-brandBlue mb-8 rounded-full"></div>

        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Admissions are now open for the upcoming session.
          <br /> Secure your child’s future with quality education and care.
        </p>

        <button className="bg-brandBlue text-black font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default ApplyNow;
