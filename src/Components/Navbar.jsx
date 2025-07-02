import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin className="text-2xl sm:text-3xl" />, link: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: <FaTwitter className="text-2xl sm:text-3xl" />, link: 'https://Twitter.com', name: 'Twitter' },
 
  { icon: <FaFacebook className="text-2xl sm:text-3xl" />, link: 'https://facebook.com', name: 'Facebook' },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white shadow-lg fixed top-0 left-0 z-50 text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20 md:h-24">
        {/* Left: Social Icons (Hidden on Mobile) */}
        <div className="hidden sm:flex gap-1 md:gap-2">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 ease-in-out transform hover:scale-110 h-1"
              aria-label={`Visit our ${item.name} page`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Center: Logo Image */}
        <div className="flex items-center justify-center mt-5">
          <img
            src="/images/logo.jpg"
            alt="MAR Group Logo"
            className="h-10 sm:h-12 md:h-35 w-auto object-contain"
            onError={(e) => console.error("Logo failed to load:", e)}
          />
        </div>

        {/* Right: Button */}
        <button className="bg-red-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;