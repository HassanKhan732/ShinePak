import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const profiles = [
  {
    name: "Ali Khan",
    role: "Frontend Developer",
    likes: "1.2K",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Expert in React and UI design.",
  },
  {
    name: "Sana Malik",
    role: "UX Designer",
    likes: "934",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Focused on creating intuitive experiences.",
  },
  {
    name: "Hamza Noor",
    role: "Backend Engineer",
    likes: "781",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    description: "Loves building scalable systems.",
  },
  {
    name: "Zoya Ahmed",
    role: "Marketing Manager",
    likes: "1.4K",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    description: "Drives brand strategies and growth.",
  },
  {
    name: "Imran Qureshi",
    role: "DevOps Engineer",
    likes: "623",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    description: "Streamlines deployments and infra.",
  },
  {
    name: "Mehak Tariq",
    role: "Psychologist",
    likes: "842",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    description: "Helps people build better lives.",
  },
  {
    name: "Omar Saleem",
    role: "AI Researcher",
    likes: "1.1K",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    description: "Solves problems with AI models.",
  },
  {
    name: "Hiba Rizvi",
    role: "Content Writer",
    likes: "997",
    image: "https://randomuser.me/api/portraits/women/64.jpg",
    description: "Writes impactful stories and blogs.",
  },
  {
    name: "Faizan Shah",
    role: "Game Developer",
    likes: "765",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    description: "Builds immersive game experiences.",
  },
  {
    name: "Ayesha Butt",
    role: "Teacher",
    likes: "1.3K",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    description: "Loves sharing knowledge with kids.",
  },
  {
    name: "Rizwan Mir",
    role: "SEO Expert",
    likes: "890",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    description: "Optimizes online visibility and traffic.",
  },
  {
    name: "Nimra Hashmi",
    role: "HR Manager",
    likes: "688",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
    description: "Connects talent with opportunities.",
  },
];

const PeopleGridSection = () => {
  return (
    <div className="py-16 bg-[#1a1a1a] text-white px-4 md:px-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {profiles.map((person, index) => (
          <div
            key={index}
            className="bg-[#222] rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 cursor-pointer hover:shadow-xl"
          >
            {/* Top Row */}
            <div className="w-full flex justify-between items-center text-sm text-gray-400 mb-3">
              <span>{person.role}</span>
              <span className="flex items-center gap-1">
                <FaThumbsUp className="text-blue-400" /> {person.likes}
              </span>
            </div>

            {/* Image */}
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-red-500 mb-4"
            />

            {/* Info */}
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-sm text-gray-300 mt-1">{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleGridSection;
