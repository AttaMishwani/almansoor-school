import React from "react";

const Contact = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-2">
              📍 123 School Street, Karachi, Pakistan
            </p>
            <p className="text-gray-700 mb-2">📞 +92 300 1234567</p>
            <p className="text-gray-700">✉️ info@springfieldschool.com</p>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow p-6 rounded-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
