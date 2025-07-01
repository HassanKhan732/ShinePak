import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaYoutube } from 'react-icons/fa';

const creators = [
  { id: 0, name: 'Muhammad Awais Razzaq – SEO & WP Developer' },
  { id: 1, name: 'Shoaib Zareen – Digital Sales & E-commerce' },
  { id: 2, name: 'Arsalan Rashid – E-Commerce & SaaS Expert' },
  { id: 3, name: 'Muhammad Ahmed – SEO & Blogging Specialist' },
  { id: 4, name: 'M Yasir Khan – GoHighLevel Expert' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Trending', path: '/trending' },
  { name: 'Creators', path: '/creators' },
  { name: 'Stars', path: '/stars' },
  { name: 'Profiles', path: '/profiles' },
  { name: 'Genius Hub', path: '/genius-hub' },
  { name: 'Store', path: '/store' },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-black text-white shadow-lg fixed top-20 sm:top-24 left-0 z-40 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          {/* Left: Hamburger */}
          <div
            onClick={() => setIsOpen(true)}
            className="text-2xl sm:text-3xl cursor-pointer text-gray-300 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            aria-label="Open sidebar"
          >
            <FaBars />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-300 hover:text-red-500 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: YouTube Button */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Visit our YouTube channel"
          >
            <FaYoutube className="text-lg sm:text-xl" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 sm:w-80 bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 p-6 sm:p-8 overflow-y-auto shadow-2xl`}
      >
        {/* Close Button */}
        <button
          className="text-right w-full text-red-500 text-2xl sm:text-3xl mb-6 hover:text-red-400 transition-colors duration-200"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            MAR 456
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            MAR Group established IT Activities in 2019 as a dynamic group of companies. Under the umbrella of IT Activities, several impactful projects operate, including UL Brands, Genius Profiles, IT RankUp, and Dreaming Flight.
          </p>

          <h3 className="text-lg sm:text-xl mt-4 font-semibold text-white">Trending Profiles</h3>
          <div className="flex flex-col gap-3">
            {creators.map((creator) => (
              <Link
                key={creator.id}
                to={`/creator-profile/${creator.id}`}
                className="text-sm sm:text-base text-gray-300 hover:text-red-500 transition-colors duration-200 transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                {creator.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm sm:text-base text-gray-300 hover:text-red-500 transition-colors duration-200 transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar2;