import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, link: 'https://linkedin.com' },
  { icon: <FaGithub />, link: 'https://github.com' },
  { icon: <FaTelegram />, link: 'https://telegram.org' },
  { icon: <FaFacebook />, link: 'https://facebook.com' },
];

const Navbar = () => {
  return (
    <nav className="w-full h-36 bg-black text-white flex items-center justify-between px-10 shadow-md">
      
      {/* Left: Social Icons */}
      <div className="flex gap-6 text-2xl">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Center: Logo */}
      <div className="text-3xl font-bold tracking-widest ">
        LOGO
      </div>

      {/* Right: Button */}
      <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black">
        Get Featured
      </button>
    </nav>
  );
};

export default Navbar;
