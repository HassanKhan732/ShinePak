import React from "react";
import { Link } from "react-router-dom";
import allProfiles from "./profilesData";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen w-full overflow-hidden pt-20 sm:pt-24 md:pt-28">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-1"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => console.error("Video failed to load:", e)}
      >
        <source src="/videos/vid1.mp4" type="video/mp4" />
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-80 flex items-center justify-center">
          <p className="text-white text-center text-sm sm:text-base">
            Video failed to load. Please check the file path or format.
          </p>
        </div>
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 sm:bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center sm:items-end justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 mt-30">
        <div className="grid gap-4 sm:gap-6 w-full max-w-[90%] sm:max-w-md md:max-w-lg">
          {allProfiles.slice(0, 3).map((profile) => (
            <Link
              key={profile.id}
              to={`/profile/${profile.id}`}
              className="bg-black bg-opacity-80 text-white rounded-xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-center w-full hover:scale-105 transition-transform duration-300 border border-white/10 hover:border-red-500/50"
            >
              {/* Left: Text */}
              <div className="flex-1 text-center sm:text-left">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm mb-2 sm:mb-3 inline-block">
                  {profile.role}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{profile.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-2">{profile.description}</p>
                <p className="text-xs text-gray-400">{profile.date}</p>
              </div>
              {/* Right: Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mt-4 sm:mt-0 sm:ml-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </Link>
          ))}
        </div>
        {/* Explore More Button */}
        <Link
          to="/profiles"
          className="mt-6 sm:mt-8 inline-block bg-red-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default Hero;