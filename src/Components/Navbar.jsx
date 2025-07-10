import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin className="text-2xl sm:text-3xl" />, link: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: <FaTwitter className="text-2xl sm:text-3xl" />, link: 'https://twitter.com', name: 'Twitter' },
  { icon: <FaFacebook className="text-2xl sm:text-3xl" />, link: 'https://facebook.com', name: 'Facebook' },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 md:h-24">
        {/* Left: Social Icons (Hidden on Mobile) */}
        <div className="hidden sm:flex gap-4 md:gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 ease-in-out transform hover:scale-110"
              aria-label={`Visit our ${item.name} page`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Center: Logo Image */}
        <div className="flex items-center justify-center">
          <img
            src="/images/logo.jpg"
            alt="MAR Group Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            onError={(e) => console.error("Logo failed to load:", e)}
          />
        </div>

        {/* Right: Button */}
        <Link
          to="/form"
          className="bg-red-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;