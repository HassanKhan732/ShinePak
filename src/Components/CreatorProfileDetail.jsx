import React from "react";
import { useParams, Link } from "react-router-dom";
import creatorsData from "./creatorsData";

const CreatorProfileDetail = () => {
  const { id } = useParams();
  const creator = creatorsData.find((c) => c.id === parseInt(id));

  if (!creator) {
    return (
      <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Creator Not Found</h1>
          <Link
            to="/creators"
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Back to Creators
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">{creator.name}</h1>
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
          <div className="w-48 h-48">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
              {creator.role}
            </span>
            <p className="text-sm text-gray-300 mb-4">{creator.description}</p>
            <p className="text-xs text-gray-400 mb-4">Joined: {creator.date}</p>
            <h3 className="text-lg font-semibold mb-2">Bio</h3>
            <p className="text-sm text-gray-300 mb-4">{creator.bio}</p>
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
              {creator.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <Link
              to="/creators"
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Back to Creators
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorProfileDetail;