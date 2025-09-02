import React from "react";

const About = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About Us</h2>
        <p className="text-gray-600 text-lg mb-6">
          Welcome to <span className="font-semibold">Springfield School</span>,
          a place where young minds are nurtured, creativity is encouraged, and
          learning is a joyful journey.
        </p>
        <img
          src="https://source.unsplash.com/800x400/?school,classroom"
          alt="School Building"
          className="rounded-xl shadow-lg mx-auto mb-6"
        />
        <p className="text-gray-700 text-md leading-relaxed">
          Since our founding in 1990, we’ve been dedicated to providing
          world-class education with a strong focus on academics, sports, arts,
          and character building. Our mission is to create confident,
          responsible, and innovative leaders of tomorrow.
        </p>
      </div>
    </section>
  );
};

export default About;
