import React, { useState } from "react";
import { Link } from "react-router-dom";
import allProfiles from "./profilesData";

const MoreProfiles = () => {
  const [profiles, setProfiles] = useState(allProfiles.slice(0, 3)); // Initial 3 profiles
  const [currentIndex, setCurrentIndex] = useState(3); // Start after initial 3
  const profilesPerLoad = 3; // Number of profiles to load per click
  const maxLoads = 12; // Maximum number of loads

  const loadMoreProfiles = () => {
    if (currentIndex < allProfiles.length && profiles.length / profilesPerLoad < maxLoads) {
      const nextProfiles = allProfiles.slice(currentIndex, currentIndex + profilesPerLoad);
      setProfiles([...profiles, ...nextProfiles]);
      setCurrentIndex(currentIndex + profilesPerLoad);
    }
  };

  const hasMore = profiles.length / profilesPerLoad < maxLoads && currentIndex < allProfiles.length;

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
    
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/profile/${profile.id}`}
              className="bg-black rounded-lg shadow-lg p-4 flex items-center border border-white/10 hover:scale-105 transition-transform duration-300"
            >
              {/* Left: Text */}
              <div className="flex-1">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
                  {profile.role}
                </span>
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <p className="text-sm text-gray-300">{profile.description}</p>
                <p className="text-xs text-gray-400 mt-2">{profile.date}</p>
              </div>
              {/* Right: Image */}
              <div className="w-24 h-24 ml-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          {hasMore ? (
            <button
              onClick={loadMoreProfiles}
              className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
            >
              Load More
            </button>
          ) : (
            <p className="text-gray-400 text-sm">No more profiles to load</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MoreProfiles;