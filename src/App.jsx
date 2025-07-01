import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Hero from "./Components/Hero";
import SliderSection from "./Components/SliderSection";
import PeopleGridSection from "./Components/PeopleGridSection";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import MoreProfiles from "./Components/MoreProfiles";
import ProfileDetail from "./Components/ProfileDetail";
import PeopleProfileDetail from "./Components/PeopleProfileDetail";
import SliderProfileDetail from "./Components/SliderProfileDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Navbar2 />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SliderSection />
                <PeopleGridSection />
              </>
            }
          />
          <Route path="/more-profiles" element={<MoreProfiles />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
          <Route path="/people-profile/:id" element={<PeopleProfileDetail />} />
          <Route path="/slider-profile/:id" element={<SliderProfileDetail />} />
        </Routes>
        <Banner />
        <Footer />
      </div>
    </Router>
  );
};

export default App;