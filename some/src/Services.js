import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Services.css";

export const eventOptions = {
  Wedding: [
    { name: "Wedding Venue", values: ["Outdoor Garden", "Banquet Hall", "Beachside", "Other"], prices: [15000, 17000, 20000, 30000] },
    { name: "Catering Service", values: ["Vegetarian", "Non-Vegetarian", "Buffet", "Not required", "Other"], prices: [12000, 15000, 17000, 0, 18000] },
    { name: "Photography", values: ["Yes", "No"], prices: [4000, 0] },
    { name: "Haldi Ceremony", values: ["Yes", "No"], prices: [10000, 0] },
    { name: "Wedding Gifts", values: ["Yes", "No"], prices: [5000, 0] },
  ],

  Social_Gathering: [
    { name: "Venue", values: ["Community Hall", "Outdoor Park", "Private Venue", "Other"], prices: [8000, 7000, 10000, 5000] },
    { name: "Gathering Type", values: ["Casual Meetup", "Community Event", "Networking", "Other"], prices: [0, 0, 0, 0] },
    { name: "Food Arrangement", values: ["Full Catering", "Snacks & Beverages", "Other"], prices: [6000, 5000, 4000] },
    { name: "Entertainment", values: ["Live Music", "DJ", "Games & Activities", "Not Required", "Other"], prices: [5000, 6000, 4000, 0, 5000] },
  ],

  Birthday_Party: [
    { name: "Birthday Venue", values: ["Indoor Hall", "Outdoor Park", "Restaurant", "Other"], prices: [8000, 10000, 8000, 8000] },
    { name: "Entertainment Services", values: ["Magician", "Live Music", "DJ", "Other"], prices: [5000, 5500, 7000, 6000] },
    { name: "Theme Selection", values: ["Cartoon", "Movie", "Fantasy", "Other"], prices: [4000, 5000, 6000, 6000] },
    { name: "Return Gifts", values: ["Toys", "Customized Hampers", "Stationery Kits", "Not Required", "Other"], prices: [4000, 6000, 2000, 0, 5000] },
  ],

  Corporate_Event: [
    { name: "Meeting Style", values: ["Boardroom", "Conference Hall", "Seminar Setup", "Other"], prices: [6000, 10000, 10000, 8000] },
    { name: "Food Services", values: ["Lunch Buffet", "Snack & Beverages", "High Tea", "Other"], prices: [7000, 5000, 3000, 6000] },
    { name: "Seating Arrangement", values: ["Theater Style", "Classroom Setup", "Round Table", "Other"], prices: [8000, 6000, 5000, 4000] },
    { name: "Technology Setup", values: ["Projector", "Live Streaming", "VR Experience", "Other"], prices: [4000, 5000, 10000, 7000] },
  ],

  Inauguration_Party: [
    { name: "Venue Type", values: ["Corporate Hall", "Outdoor Setup", "Auditorium", "Other"], prices: [15000, 17000, 13000, 10000] },
    { name: "Refreshment Services", values: ["Coffee & Snacks", "Full Catering", "Welcome Drinks", "Other"], prices: [5000, 7000, 4000, 5000] },
    { name: "Guest Speakers", values: ["Industry Experts", "Politicians", "Company Executives", "Not required"], prices: [5000, 5000, 3000, 0] },
    { name: "Media Coverage", values: ["Local News", "Live Streaming", "Photography", "Not Required", "Other"], prices: [5000, 7000, 6000, 0, 5000] },
  ],
};


const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      alert("Login to access services"); 
      navigate("/login"); // Redirect to login if not logged in
    }
  }, [navigate]);
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [eventType, setEventType] = useState("");
  
  const [eventDetails, setEventDetails] = useState({
    city: "",
    numPeople: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    startDate: "", // For wedding
    endDate: "",   // For wedding
  });
  

  const [selectedServices, setSelectedServices] = useState({});
  const [customInputs, setCustomInputs] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const eventOptions = {
    Wedding: [
      { name: "Wedding Venue", values: ["Outdoor Garden", "Banquet Hall", "Beachside", "Other"], prices: [15000, 17000, 20000, 30000] },
      { name: "Catering Service", values: ["Vegetarian", "Non-Vegetarian", "Buffet", "Not required","Other"], prices: [12000, 15000, 17000,0, 18000] },
      { name: "Photography", values: ["Yes", "No", ], prices: [4000, 0 ] },
      { name: "Haldi Ceremony", values: ["Yes", "No", ], prices: [10000, 0 ] },
      { name: "Wedding Gifts", values: ["Yes", "No" ], prices: [5000, 0, ] },
    ],

    Social_Gathering : [
      { name: "Venue", values: ["Community Hall", "Outdoor Park", "Private Venue", "Other"], prices: [8000, 7000, 10000, 5000] },
      { name: "Gathering Type", values: ["Casual Meetup", "Community Event", "Networking", "Other"],prices: [0, 0, 0, 0 ]},
      { name: "Food Arrangement", values: ["Full Catering", "Snacks & Beverages", "Other"],prices: [6000, 5000, 4000,]},
      { name: "Entertainment", values: ["Live Music", "DJ", "Games & Activities", "Not Required","Other",],prices: [5000, 6000, 4000,0,5000] },
    ],

    Birthday_Party: [
      { name: "Birthday Venue", values: ["Indoor Hall", "Outdoor Park", "Restaurant", "Other"],prices: [8000, 10000, 8000, 8000] },
      { name: "Entertainment Services", values: ["Magician", "Live Music", "DJ", "Other"],prices: [5000, 5500, 7000, 6000] },
      { name: "Theme Selection", values: ["Cartoon", "Movie", "Fantasy", "Other"],prices: [4000, 5000, 6000, 6000] },
      { name: "Return Gifts", values: ["Toys", "Customized Hampers", "Stationery Kits","Not Required", "Other"],prices: [4000, 6000, 2000, 0, 5000] },
    ],

    Corporate_Event: [
      { name: "Meeting Style", values: ["Boardroom", "Conference Hall", "Seminar Setup", "Other"],prices: [6000, 10000, 10000, 8000] },
      { name: "Food Services", values: ["Lunch Buffet", "Snack & Beverages", "High Tea", "Other"],prices: [7000, 5000, 3000, 6000] },
      { name: "Seating Arrangement", values: ["Theater Style", "Classroom Setup", "Round Table", "Other"],prices: [8000, 6000, 5000, 4000]  },
      { name: "Technology Setup", values: ["Projector", "Live Streaming", "VR Experience", "Other"],prices: [4000, 5000, 10000, 7000] },
    ],

    Inauguration_Party: [
      { name: "Venue Type", values: ["Corporate Hall", "Outdoor Setup", "Auditorium", "Other"],prices: [15000, 17000, 13000, 10000] },
      { name: "Refreshment Services", values: ["Coffee & Snacks", "Full Catering", "Welcome Drinks", "Other"],prices: [5000, 7000, 4000, 5000] },
      { name: "Guest Speakers", values: ["Industry Experts", "Politicians", "Company Executives","Not required"],prices: [5000, 5000, 3000, 0]},
      { name: "Media Coverage", values: ["Local News", "Live Streaming", "Photography","Not Required","Other"] ,prices: [5000, 7000, 6000,0, 5000]},
    ],
    
  };

  const handleNext = () => {
    if (!personalDetails.name || !personalDetails.phone || !personalDetails.email || !personalDetails.address) {
      alert("⚠️ Please fill in all personal details before proceeding.");
      return;
    }
    setStep(2);
  };

  const handleEventSelection = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for accurate comparison
  
    if (!eventType || !eventDetails.city || !eventDetails.numPeople) {
      alert("⚠️ Please select an event type and enter location & number of people.");
      return;
    }
  
    if (eventType === "Wedding") {
      if (!eventDetails.startDate || !eventDetails.endDate) {
        alert("⚠️ Please enter both start and end dates for the wedding.");
        return;
      }
  
      const startDate = new Date(eventDetails.startDate);
      const endDate = new Date(eventDetails.endDate);
  
      if (startDate < today) {
        alert("⚠️ Start date cannot be in the past.");
        return;
      }
  
      if (endDate < startDate) {
        alert("⚠️ End date cannot be before the start date.");
        return;
      }
    } else {
      if (!eventDetails.eventDate || !eventDetails.startTime || !eventDetails.endTime) {
        alert("⚠️ Please enter the event date, start time, and end time.");
        return;
      }
  
      const eventDate = new Date(eventDetails.eventDate);
      if (eventDate < today) {
        alert("⚠️ Event date cannot be in the past.");
        return;
      }
  
      if (eventDetails.endTime <= eventDetails.startTime) {
        alert("⚠️ End time must be after the start time.");
        return;
      }
    }
  
    setStep(3);
  };
  
  const handleServiceChange = (index, value, price) => {
    const previousPrice = selectedServices[index]
      ? eventOptions[eventType][index].prices[eventOptions[eventType][index].values.indexOf(selectedServices[index])] || 0
      : 0;
  
    setSelectedServices((prev) => ({ ...prev, [index]: value }));
  
    if (value === "Other") {
      setCustomInputs((prev) => ({ ...prev, [index]: "" })); // Set empty value initially
    } else {
      setCustomInputs((prev) => {
        const updatedInputs = { ...prev };
        delete updatedInputs[index]; // Remove custom input if "Other" is not selected
        return updatedInputs;
      });
    }
  
    setTotalPrice((prevPrice) => prevPrice - previousPrice + price);
  };
  
  const handleConfirmBooking = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
  
    if (!loggedInUser) {
      alert("You must be logged in to book an event!");
      navigate("/login");
      return;
    }
  
    if (Object.keys(selectedServices).length < eventOptions[eventType].length) {
      alert("⚠️ Please select all required services.");
      return;
    }
  
    for (let index in selectedServices) {
      if (selectedServices[index] === "Other" && (!customInputs[index] || customInputs[index].trim() === "")) {
        alert(`⚠️ Please specify details for ${eventOptions[eventType][index].name}.`);
        return;
      }
    }
  
    const bookingDetails = {
      user: loggedInUser,  // Associate booking with logged-in user
      personalDetails,
      eventType,
      eventDetails,
      selectedServices,
      customInputs,
      totalPrice,
      bookingDate: new Date().toLocaleString(),
    };
  
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));
  
    alert(`🎉 Booking Successful! Total Price: ₹${totalPrice}`);
  
    // Reset form
    setStep(1);
    setPersonalDetails({ name: "", phone: "", email: "", address: "" });
    setEventType("");
    setEventDetails({ eventDate: "", startTime: "", endTime: "" });
    setSelectedServices({});
    setCustomInputs({});
    setTotalPrice(0);
  };
  

  return (
    <div className="services-container">
      <h2>Event Registration</h2>

      {step === 1 && (
        <>
          <h3>Enter Your Details</h3>

          <label>Name:</label>
          <input type="text" value={personalDetails.name} onChange={(e) => setPersonalDetails({ ...personalDetails, name: e.target.value })} required />

          <label>Phone Number:</label>
          <input type="tel" value={personalDetails.phone} onChange={(e) => setPersonalDetails({ ...personalDetails, phone: e.target.value })} required />

          <label>Email:</label>
          <input type="email" value={personalDetails.email} onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })} required />

          <label>Address:</label>
          <textarea value={personalDetails.address} onChange={(e) => setPersonalDetails({ ...personalDetails, address: e.target.value })} required />

          <button className="next-btn" onClick={handleNext}>Next</button>
        </>
      )}

    {step === 2 && (
  <>
    <h3>Enter Event Details</h3>

    {/* Event Type Selection */}
    <label>Event Type:</label>
    <select 
      value={eventType} 
      onChange={(e) => setEventType(e.target.value)} 
      required
    >
      <option value="">Select</option>
      {Object.keys(eventOptions).map((event) => (
        <option key={event} value={event}>
          {event.charAt(0).toUpperCase() + event.slice(1)}
        </option>
      ))}
    </select>

    {/* City Input */}
    <label>Event Location (City):</label>
    <input 
      type="text" 
      value={eventDetails.city} 
      onChange={(e) => setEventDetails({ ...eventDetails, city: e.target.value })} 
      required 
    />

    {/* Number of People Input */}
    <label>Number of People:</label>
<input 
  type="number" 
  value={eventDetails.numPeople} 
  onChange={(e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 || e.target.value === "") {
      setEventDetails({ ...eventDetails, numPeople: e.target.value });
    }
  }} 
  required 
/>


    {/* Show Date/Time Fields Only After Event Type is Selected */}
    {eventType && (
      <>
        {eventType === "Wedding" ? (
  <>
    <label>Start Date:</label>
    <input 
      type="date" 
      value={eventDetails.startDate} 
      onChange={(e) => setEventDetails({ ...eventDetails, startDate: e.target.value })} 
      min={new Date().toISOString().split("T")[0]} // Prevent past dates
      required 
    />

    <label>End Date:</label>
    <input 
      type="date" 
      value={eventDetails.endDate} 
      onChange={(e) => setEventDetails({ ...eventDetails, endDate: e.target.value })} 
      min={eventDetails.startDate || new Date().toISOString().split("T")[0]} // Ensure end date is same or after start date
      required 
    />
  </>
) : (

          <>
            <label>Event Date:</label>
            <input 
              type="date" 
              value={eventDetails.eventDate} 
              onChange={(e) => setEventDetails({ ...eventDetails, eventDate: e.target.value })} 
              required 
            />

<label>Start Time:</label>
<input 
  type="time" 
  value={eventDetails.startTime} 
  onChange={(e) => setEventDetails({ ...eventDetails, startTime: e.target.value })} 
  required 
/>

<label>End Time:</label>
<input 
  type="time" 
  value={eventDetails.endTime} 
  onChange={(e) => setEventDetails({ ...eventDetails, endTime: e.target.value })} 
  min={eventDetails.startTime} // Ensure end time is after start time
  required 
/>

          </>
        )}
      </>
    )}

    <button className="next-btn" onClick={handleEventSelection}>Next</button>
  </>
)}

      {step === 3 && (
        <>
          <h3>Event Services</h3>
          {eventOptions[eventType]?.map((option, index) => (
            <div key={index}>
              <label>{option.name}:</label>
              <select value={selectedServices[index] || ""} onChange={(e) => handleServiceChange(index, e.target.value, option.prices[option.values.indexOf(e.target.value)] || 0)} required>
                <option value="">Select</option>
                {option.values.map((value, i) => (
                  <option key={i} value={value}>{value} - ₹{option.prices[i]}</option>
                ))}
              </select>

              {/* Show custom input for "Other" */}
              {selectedServices[index] === "Other" && (
  <input 
    type="text" 
    placeholder={`Specify ${option.name}`} 
    value={customInputs[index] || ""} 
    onChange={(e) => setCustomInputs({ ...customInputs, [index]: e.target.value })} 
    required
  />
)}

            </div>
          ))}

          <h3>Total Quoted Price: ₹{totalPrice}</h3>

          <button className="confirm-btn" onClick={handleConfirmBooking}>Confirm Booking</button>
        </>
      )}
    </div>
  );
};

export default Services;

