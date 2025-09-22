import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="bg-brandBlue mx-auto max-w-[1100px] w-full text-blue-500">
        <div className="container mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="logo" className="w-40" />
          </Link>

          {/* Links */}
          <div className="space-x-6 font-medium">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Contact", to: "/contact" },
              { name: "Career", to: "/career" },
              { name: "Events", to: "/events" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="relative pb-1 transition duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
