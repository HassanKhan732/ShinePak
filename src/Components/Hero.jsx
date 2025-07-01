import React from "react";
import { Link } from "react-router-dom";
import allProfiles from "./profilesData";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/vid1.mp4"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => console.log("Video failed to load:", e)}
      ></video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-12">
        <div className="grid gap-6 max-w-md">
          {allProfiles.slice(0, 3).map((profile) => (
            <Link
              key={profile.id}
              to={`/profile/${profile.id}`}
              className="bg-black text-white rounded-lg shadow-lg p-4 flex items-center w-[400px] hover:scale-105 transition-transform duration-300 border border-white/10"
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
        {/* Explore More Button */}
        <Link
          to="/more-profiles"
          className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-700 transition-colors duration-300"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Hero;