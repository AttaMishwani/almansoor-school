import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons
import gsap from "gsap";
import logo from "../assets/images/logos/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Testimonials", to: "#testimonials" },

    // { name: "Career", to: "/career" },
    { name: "Events", to: "/events" },
    // { name: "Admin Panel", to: "/adminpanel" },
  ];

  // GSAP animation on menu open/close
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
    <header className="w-full shadow-md">
      <nav className="bg-brandBlue mx-auto max-w-[1100px] w-full">
        <div className="container mx-auto flex justify-center items-center py-3 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-44 sm:w-60" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
