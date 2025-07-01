import React from "react";
import { Link } from "react-router-dom";

const geniusItems = [
  {
    id: 1,
    title: "Innovation Lab",
    description: "Collaborate on cutting-edge projects and ideas.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "Tech Workshops",
    description: "Learn from industry experts in hands-on sessions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Startup Incubator",
    description: "Support for launching your next big idea.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  },
];

const GeniusHub = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Genius Hub</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {geniusItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#222] rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default GeniusHub;