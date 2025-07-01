import React from "react";
import { Link } from "react-router-dom";

const trendingItems = [
  {
    id: 1,
    title: "Latest Tech Innovations",
    description: "Discover the newest breakthroughs in technology.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    title: "AI Revolution",
    description: "How AI is transforming industries worldwide.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Sustainable Fashion",
    description: "Eco-friendly trends shaping the fashion industry.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=400&q=80",
  },
];

const Trending = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Trending Now</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trendingItems.map((item) => (
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

export default Trending;