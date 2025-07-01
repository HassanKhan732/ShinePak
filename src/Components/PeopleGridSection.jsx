import React from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import allProfiles from "./profilesData";

const PeopleGridSection = () => {
  return (
    <div className="py-16 bg-[#000] text-white px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {allProfiles.map((person) => (
          <Link
            key={person.id}
            to={`/people-profile/${person.id}`}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PeopleGridSection;