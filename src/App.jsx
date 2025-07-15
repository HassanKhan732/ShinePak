import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Footer from "./Components/Footer";
import ProfileDetail from "./Components/ProfileDetail";
import PeopleProfileDetail from "./Components/PeopleProfileDetail";
import SliderProfileDetail from "./Components/SliderProfileDetail";
import CreatorProfileDetail from "./Components/CreatorProfileDetail";
import Preloader from "./Components/Preloader";
import Form from "./Components/Form";
import About from "./Components/About"
import Services from "./Components/Services"
import Privacy from "./Components/Privacy"
// ScrollToTop component to handle scroll-to-top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll for better UX
    });
  }, [pathname]);

  return null;
};

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
        <div className="pt-32 sm:pt-40 md:pt-48">
          <Navbar />
          <Navbar2 />
          <ScrollToTop />
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
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/privacy" element={<Privacy/>} />

          </Routes>
          <Banner />
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;