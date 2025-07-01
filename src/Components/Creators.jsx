import React from "react";
import { Link } from "react-router-dom";
import creatorsData from "./creatorsData";

const Creators = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Creators</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {creatorsData.map((creator) => (
            <Link
              key={creator.id}
              to={`/creator-profile/${creator.id}`}
              className="bg-[#222] rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-red-500 mb-4"
              />
              <h3 className="text-lg font-semibold">{creator.name}</h3>
              <p className="text-sm text-gray-300">{creator.description}</p>
            </Link>
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

export default Creators;