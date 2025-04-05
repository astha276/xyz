import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EpicVents from "./EpicVents";
import Services from "./Services";
import MyBookings from "./MyBookings";
import Enquiry from "./Enquiry";
import AboutUs from "./About";
import Navbar from "./Navbar";
import Wedding from "./Wedding";
import Social from "./Social";
import Corporate from "./Corporate";
import Inauguration from "./Inauguration";
import Footer from "./Footer";
import Birthday from "./Birthday";
import Login from "./Login"; 
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Sync state with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<EpicVents />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/social" element={<Social />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/inauguration" element={<Inauguration />} />
          <Route path="/MyBookings" element={<MyBookings />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
