import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brandBlue text-black mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">EduSite</h2>
          <p className="mt-3 text-sm text-black">
            Empowering students with knowledge and guidance for a brighter
            future 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-blue-300 transition">
                Career
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-blue-300 transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-blue-500">Contact Us</h3>
          <p className="mt-4 text-sm text-black">📧 info@edusite.com</p>
          <p className="text-sm text-black">📞 +92 300 1234567</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-blue-900 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} EduSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
