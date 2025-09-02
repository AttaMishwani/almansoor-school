import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-brandBlue text-blue-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-500 hover:text-green-400"
        >
          EduSite
        </Link>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-green-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            to="/career"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Career
          </Link>
          <Link
            to="/events"
            className="hover:text-green-400 transition-colors duration-300"
          >
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
