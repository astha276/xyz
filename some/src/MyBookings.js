import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MyBookings.css"; // Ensure this file exists
import { eventOptions } from "./Services";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const checkLoginAndFetchBookings = useCallback(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const loggedInUser = localStorage.getItem("loggedInUser");
    const allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    console.log("All Bookings from LocalStorage:", allBookings);
    console.log("Logged in User:", loggedInUser);

    const userBookings = allBookings.filter((b) => b?.user === loggedInUser);

    console.log("Filtered Bookings for User:", userBookings);

    setBookings(userBookings);
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    checkLoginAndFetchBookings();

    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      checkLoginAndFetchBookings();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [checkLoginAndFetchBookings]);

  // Delete a single booking
  const handleDeleteBooking = (index) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  
      // Remove only the selected booking of the logged-in user
      const updatedBookings = allBookings.filter((b, i) => !(b.user === loggedInUser && i === index));
  
      setBookings(updatedBookings.filter((b) => b.user === loggedInUser));
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    }
  };

  // Delete all bookings for the logged-in user
  const handleClearAllBookings = () => {
    if (window.confirm("Are you sure you want to clear all your bookings?")) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];

      // Remove only the logged-in user's bookings
      const updatedBookings = allBookings.filter((b) => b.user !== loggedInUser);

      setBookings([]); // Clear state
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    }
  };

  // Handle Payment
  const handlePayNow = (booking) => {
    localStorage.setItem("selectedBooking", JSON.stringify(booking));
    navigate("/payment");
  };

  return (
    <div className="my-bookings">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <>
          {bookings.map((booking, index) => {
            const { eventType, selectedServices, totalPrice, personalDetails, eventDetails, bookingDate } = booking;

            return (
              <div key={index} className="booking-card">
                <h2 className="event-title">{eventType.toUpperCase()} Event</h2>

                <p><strong>Name:</strong> {personalDetails?.name}</p>
                <p><strong>Phone:</strong> {personalDetails?.phone}</p>
                <p><strong>Email:</strong> {personalDetails?.email}</p>
                <p><strong>City:</strong> {eventDetails?.city}</p>

                <p><strong>Booked On:</strong> {bookingDate}</p>

                <h3>Selected Services:</h3>
                {Object.entries(selectedServices || {}).map(([serviceKey, optionSelected]) => {
                  const serviceName =
                    eventOptions[eventType]?.[serviceKey]?.name || serviceKey;

                  return (
                    <div key={serviceKey} className="service-item">
                      <strong>{serviceName}:</strong> {optionSelected}
                    </div>
                  );
                })}

                <h3><strong>Total Price:</strong> ₹{totalPrice}</h3>

                <button className="delete-btn" onClick={() => handleDeleteBooking(index)}>Delete Booking</button>
                <button className="pay-btn" onClick={() => handlePayNow(booking)}>Pay Amount</button>
              </div>
            );
          })}

          {/* Clear All Bookings Button */}
          <button className="clear-btn" onClick={handleClearAllBookings}>
            Clear All Bookings
          </button>
        </>
      )}
    </div>
  );
};

export default MyBookings;
