import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Creators from "./Components/Creators";
import Stars from "./Components/Stars";
import Profiles from "./Components/Profiles";
import GeniusHub from "./Components/GeniusHub";
import Store from "./Components/Store";
import Banner from "./Components/Banner";
import ProfileDetail from "./Components/ProfileDetail";
import PeopleProfileDetail from "./Components/PeopleProfileDetail";
import SliderProfileDetail from "./Components/SliderProfileDetail";
import CreatorProfileDetail from "./Components/CreatorProfileDetail";
import Preloader from "./Components/Preloader";
import Form from "./Components/Form";
import SubmissionList from "./Components/SubmissionList";
import Footer from "./Components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds delay to match preloader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/genius-hub" element={<GeniusHub />} />
            <Route path="/store" element={<Store />} />
            <Route path="/profile/:id" element={<ProfileDetail />} />
            <Route path="/people-profile/:id" element={<PeopleProfileDetail />} />
            <Route path="/slider-profile/:id" element={<SliderProfileDetail />} />
            <Route path="/creator-profile/:id" element={<CreatorProfileDetail />} />
            <Route path="/form" element={<Form />} />
            <Route path="/submissions" element={<SubmissionList />} />
          </Routes>
          <Banner />
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;