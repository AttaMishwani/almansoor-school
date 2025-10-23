import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import logo from "../assets/images/logos/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Events", to: "events" },
    { name: "Contact", to: "contact" },
  ];

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <header className="w-full shadow-md bg-gray-50 text-white fixed top-0 left-0 z-50">
      <nav className="mx-auto max-w-[1100px] w-full px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <img src={logo} alt="logo" className="w-44 sm:w-60" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.to)}
                className="hover:text-blue-500 font-light text-black transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="md:hidden bg-brandBlue overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-lg font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.to)}
                className="hover:text-blue-500 text-black transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
