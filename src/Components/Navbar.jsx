import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin className="text-2xl md:text-3xl" />, link: 'https://linkedin.com' },
  { icon: <FaGithub className="text-2xl md:text-3xl" />, link: 'https://github.com' },
  { icon: <FaTelegram className="text-2xl md:text-3xl" />, link: 'https://telegram.org' },
  { icon: <FaFacebook className="text-2xl md:text-3xl" />, link: 'https://facebook.com' },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">
        {/* Left: Social Icons */}
        <div className="flex gap-4 sm:gap-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 ease-in-out transform hover:scale-110"
              aria-label={`Visit our ${item.link.split('.')[1]} page`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          MAR GROUP
        </div>

        {/* Right: Button */}
        <button className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Get Featured
        </button>
      </div>
    </nav>
  );
};

export default Navbar;