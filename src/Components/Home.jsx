import React from "react";
import Hero from "./Hero";
import SliderSection from "./SliderSection";
import PeopleGridSection from "./PeopleGridSection";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <SliderSection />
      <PeopleGridSection />
    </div>
  );
};

export default Home;