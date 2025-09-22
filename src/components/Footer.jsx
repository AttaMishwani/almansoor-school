import React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white poppins-thin">
      {/* Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#F9FAFB"
          fillOpacity="1"
          d="M0,160L34.3,176C68.6,192,137,224,206,218.7C274.3,213,343,171,411,144C480,117,549,107,617,128C685.7,149,754,203,823,224C891.4,245,960,235,1029,213.3C1097.1,192,1166,160,1234,165.3C1302.9,171,1371,213,1406,234.7L1440,256L1440,0L0,0Z"
        ></path>
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">Al Mansoor</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 max-w-xs">
            Empowering students with knowledge, values, and guidance to build a
            brighter future.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", to: "/" },
              { name: "About", to: "/about" },
              { name: "Career", to: "/career" },
              { name: "Events", to: "/events" },
              { name: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-lg" />
              <span>Karachi, Pakistan</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <span>info@almansoor.edu</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <span>+92 300 1234567</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-5">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaTwitter />, href: "https://twitter.com" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <p className="text-center text-sm text-white/70 py-5">
          © {new Date().getFullYear()} Al Mansoor School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
