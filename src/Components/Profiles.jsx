import React from "react";
import { Link } from "react-router-dom";
import MoreProfiles from "./MoreProfiles";

const Profiles = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
       
        <MoreProfiles />
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

export default Profiles;