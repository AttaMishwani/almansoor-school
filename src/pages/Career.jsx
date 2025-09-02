import React from "react";

const Career = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Careers</h2>
        <p className="text-gray-600 text-lg mb-8">
          Join our passionate team of educators and staff who are dedicated to
          shaping the future.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["Math Teacher", "Science Teacher", "Sports Coach"].map(
            (role, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-600">{role}</h3>
                <p className="text-gray-600 mt-2">
                  We’re looking for experienced and passionate individuals to
                  join our growing team.
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Apply Now
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Career;
