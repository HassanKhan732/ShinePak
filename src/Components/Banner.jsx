import React from "react";
import Bnr from '../../public/images/bnr2.webp'
const Banner = () => {
  return (
    <section className="relative bg-[#000] py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative group overflow-hidden rounded-lg">
          {/* Image */}
          <img
            src={Bnr} // Replace with your image URL
            alt="Banner"
            className="w-full h-[400px] object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-50"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              Welcome to Shine Pak
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;