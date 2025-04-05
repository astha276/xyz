import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Sync login state with localStorage changes (across tabs)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Ensure login state is updated when component mounts
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/login");
    window.dispatchEvent(new Event("storage")); // Force navbar update
  };

  return (
    <div>
      {/* Navbar Header */}
      <header className="navbar">
        <Link to="/" className="brand-name">
          EpicVents - Event Management
        </Link>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / Sign Up
          </button>
        )}
      </header>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        {isLoggedIn && <Link to="/mybookings">My Bookings</Link>}
        <Link to="/enquiry">Enquiry</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </div>
  );
};

export default Navbar;
