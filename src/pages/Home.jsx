import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-brandBlue text-blue-500 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our School
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Empowering students with trust, knowledge, and professionalism. Join
          us on the journey to a brighter future.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md font-medium">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brandBlue mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          At{" "}
          <span className="font-semibold text-brandBlue">
            Al Mansoor School
          </span>
          , we are dedicated to nurturing young minds, fostering creativity, and
          encouraging leadership. Our mission is to provide quality education
          with values, preparing students to succeed in life.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-brandBlue">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 shadow-md rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-brandBlue">
              Trusted Service
            </h3>
            <p>
              We provide reliable and transparent education that builds
              long-term trust with parents and students.
            </p>
          </div>
          <div className="bg-gray-50 shadow-md rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-brandBlue">
              Professional Teachers
            </h3>
            <p>
              Our skilled teachers ensure professionalism and passion in every
              classroom.
            </p>
          </div>
          <div className="bg-gray-50 shadow-md rounded-xl p-6 border-t-4 border-green-500 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-4 text-brandBlue">
              Growth Oriented
            </h3>
            <p>
              We focus on overall student growth, encouraging learning, sports,
              and extracurricular activities.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-brandBlue">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              Science Fair 2025
            </h3>
            <p className="text-gray-600">
              A showcase of innovative projects by our talented students.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              Sports Day
            </h3>
            <p className="text-gray-600">
              A day full of energy, competition, and teamwork on the field.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-600">
              Cultural Festival
            </h3>
            <p className="text-gray-600">
              Celebrating diversity, creativity, and unity through performances.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-brandBlue">
          What Parents Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 shadow-md rounded-xl p-6 italic">
            "Al Mansoor School has given my child the confidence to excel both
            academically and personally."
            <p className="mt-4 font-semibold text-brandBlue">- Parent A</p>
          </div>
          <div className="bg-gray-50 shadow-md rounded-xl p-6 italic">
            "The teachers are so supportive and the environment is safe and
            encouraging for children."
            <p className="mt-4 font-semibold text-brandBlue">- Parent B</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brandBlue text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Join Al Mansoor School</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Admissions are now open for the upcoming session. Secure your child’s
          future with quality education.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md font-medium">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Home;
