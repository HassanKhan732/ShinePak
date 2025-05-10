import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const people = [
  {
    name: "Ali Raza",
    role: "Businessman",
    description: "Specialist in textile export & brand strategy.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    date: "April 10, 2025",
  },
  {
    name: "Sara Khan",
    role: "Teacher",
    description: "Passionate educator in modern learning systems.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    date: "March 22, 2025",
  },
  {
    name: "Ahmed Ali",
    role: "Developer",
    description: "Full-stack developer and system architect.",
    image: "https://images.unsplash.com/photo-1603415526960-f8f10f0b8f3b?auto=format&fit=crop&w=400&q=80",
    date: "Feb 15, 2025",
  },
  {
    name: "Zara Sheikh",
    role: "Designer",
    description: "Creative mind behind top fashion campaigns.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    date: "May 1, 2025",
  },
  {
    name: "Noman Tariq",
    role: "Marketing Lead",
    description: "Drives revenue through digital campaigns.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    date: "Jan 19, 2025",
  },
  {
    name: "Areeba Qureshi",
    role: "Psychologist",
    description: "Helping people through emotional healing.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
    date: "March 5, 2025",
  },
];

const SliderSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative py-12 bg-[#111] text-white">
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
          {people.map((person, index) => (
            <div
              key={index}
              className="min-w-[240px] h-[280px] bg-cover bg-center rounded-xl shadow-lg relative flex flex-col justify-between p-4 transform transition-transform duration-300 hover:scale-105 group"
              style={{ backgroundImage: `url(${person.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl transition-all duration-300 group-hover:bg-opacity-70"></div>

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
