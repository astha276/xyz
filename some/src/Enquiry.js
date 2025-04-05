import React from "react";
import Footer from "./Footer";
import "./Enquiry.css";

const Enquiry = () => {
  return (
    <div>
      <div className="enquiry-container">
        {/* Contact Details Box */}
        <div className="contact-box">
          <div className="contact">
            <h3>S. Harshitha</h3>
            <p>📞 Mobile: 9876543210</p>
            <p>📧 Email: <a href="mailto:harshithasaran24@gmail.com">harshithasaran24@gmail.com</a></p>
          </div>
          <div className="contact">
            <h3>Pavithra</h3>
            <p>📞 Mobile: 9876543211</p>
            <p>📧 Email: <a href="mailto:pavithra@gmail.com">pavithra@gmail.com</a></p>
          </div>
          <div className="contact">
            <h3>Astha</h3>
            <p>📞 Mobile: 9876543212</p>
            <p>📧 Email: <a href="mailto:astha@gmail.com">astha@gmail.com</a></p>
          </div>
        </div>

        {/* Address and Working Hours */}
        <div className="address">
          <h3>📍 Address</h3>
          <p>123, Nehru Street, Vellore, Tamil Nadu, India</p>
        </div>
        <div className="working-hours">
          <h3>🕒 Working Hours</h3>
          <p>Monday - Saturday: 9 AM - 7 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Include Footer */}
      <Footer />
    </div>
  );
};

export default Enquiry;
