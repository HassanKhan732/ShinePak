import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center space-y-6">

          <div className="flex items-center justify-center">
          <img
            src="/images/logo.jpg"
            alt="MAR Group Logo"
            className="h-10 sm:h-12 md:h-35 w-auto object-contain"
            onError={(e) => console.error("Logo failed to load:", e)}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <a href="#" className="hover:text-red-500 transition">Home</a>
          <a href="#" className="hover:text-red-500 transition">About</a>
          <a href="#" className="hover:text-red-500 transition">Services</a>
          <a href="#" className="hover:text-red-500 transition">Contact</a>
          <a href="#" className="hover:text-red-500 transition">Privacy</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 text-xl text-white">
          <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
          <a href="#"><FaTwitter className="hover:text-white transition" /></a>
          <a href="#"><FaInstagram className="hover:text-white transition" /></a>
          <a href="#"><FaLinkedin className="hover:text-white transition" /></a>
          <a href="#"><FaYoutube className="hover:text-white transition" /></a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 pt-4">
          © {new Date().getFullYear()} Hassan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
