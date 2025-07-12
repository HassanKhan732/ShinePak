import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Privacy', path: '/privacy' },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center">
          <img
            src="/images/logo.jpg"
            alt="MAR Group Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            onError={(e) => console.error("Logo failed to load:", e)}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-gray-300 hover:text-red-500 transition-all duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:scale-105"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-5 text-xl text-white">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover:scale-110">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-all duration-300 hover:scale-110">
            <FaYoutube />
          </a>
        </div>

        <div className="text-sm text-gray-400 pt-4">
          © {new Date().getFullYear()} ShinePak. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;