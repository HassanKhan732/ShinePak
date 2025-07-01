import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import allProfiles from "./profilesData";

const PeopleProfileDetail = () => {
  const { id } = useParams();
  const profile = allProfiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Profile Not Found</h1>
          <Link
            to="/"
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {profile.name}
        </h1>
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
          {/* Image */}
          <div className="w-48 h-48">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover rounded-full border-4 border-red-500 shadow-lg"
            />
          </div>
          {/* Details */}
          <div className="flex-1">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
              {profile.role}
            </span>
            <p className="text-sm text-gray-300 mb-4">{profile.description}</p>
            <p className="text-xs text-gray-400 mb-4 flex items-center gap-1">
              <FaThumbsUp className="text-blue-400" /> {profile.likes}
            </p>
            <p className="text-xs text-gray-400 mb-4">Joined: {profile.date}</p>
            <h3 className="text-lg font-semibold mb-2">Bio</h3>
            <p className="text-sm text-gray-300 mb-4">{profile.bio}</p>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <Link
              to="/"
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleProfileDetail;