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
      <nav className="w-full h-16 bg-black text-white flex items-center justify-between px-6 shadow-md mt-0">
        {/* Left: Hamburger */}
        <div onClick={() => setIsOpen(true)} className="text-2xl cursor-pointer hover:text-red-500">
          <FaBars />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="cursor-pointer hover:text-red-500 transition-colors duration-300"
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
          className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-1 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
        >
          <FaYoutube className="text-xl" />
          YouTube
        </a>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-50 p-5 overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          className="text-right w-full text-red-500 text-xl mb-4"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-4 text-sm">
          <h2 className="text-xl font-bold">MAR 456</h2>
          <p className="text-gray-400 text-[13px] leading-relaxed">
            MAR Group established IT Activities in 2019 as a dynamic group of companies. Under the umbrella of IT Activities, several impactful projects operate, including UL Brands, Genius Profiles, IT RankUp, and Dreaming Flight.
          </p>

          <h3 className="text-md mt-4 font-semibold">Trending Profiles</h3>
          {creators.map((creator) => (
            <Link
              key={creator.id}
              to={`/creator-profile/${creator.id}`}
              className="hover:text-red-500 cursor-pointer transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {creator.name}
            </Link>
          ))}

          <div className="mt-4 border-t border-gray-700 pt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-red-500 cursor-pointer transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;