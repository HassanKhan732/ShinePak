import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import sliderProfiles from "./sliderData";

const SliderSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative py-12 bg-[#000] text-white">
      <h2 className="text-3xl text-center font-bold mb-8">Featured People</h2>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black p-2 rounded-full shadow hover:bg-red-600 hover:text-white transition"
        >
          <FaArrowRight />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth px-10"
        >
          {sliderProfiles.map((person) => (
            <Link
              key={person.id}
              to={`/slider-profile/${person.id}`}
              className="min-w-[240px] h-[280px] bg-cover bg-center rounded-xl shadow-lg relative flex flex-col justify-between p-4 transform transition-transform duration-300 hover:scale-105 group"
              style={{ backgroundImage: `url(${person.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-opacity-60 rounded-xl transition-all duration-300 group-hover:bg-opacity-70"></div>

              <div className="relative z-10">
                <span className="bg-red-500 px-3 py-1 rounded-full text-xs font-semibold">
                  {person.role}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-sm text-gray-300">{person.description}</p>

                {/* Extra text below on hover */}
                <p className="text-xs text-gray-400 mt-2 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Learn more about {person.name}
                </p>
              </div>

              <div className="relative z-10 text-xs text-gray-400">{person.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;