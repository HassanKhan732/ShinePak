import React from "react";
import { Link } from "react-router-dom";

const stars = [
  {
    id: 1,
    name: "Fatima Noor",
    role: "Influencer",
    description: "Social media star with millions of followers.",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 2,
    name: "Usman Malik",
    role: "Tech Guru",
    description: "Known for tech reviews and tutorials.",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    id: 3,
    name: "Ayesha Siddiqui",
    role: "Fashion Icon",
    description: "Trendsetter in fashion and lifestyle.",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
  },
];

const Stars = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Stars</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stars.map((star) => (
            <div
              key={star.id}
              className="bg-[#222] rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={star.image}
                alt={star.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-red-500 mb-4"
              />
              <h3 className="text-lg font-semibold">{star.name}</h3>
              <p className="text-sm text-gray-300">{star.description}</p>
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

export default Stars;