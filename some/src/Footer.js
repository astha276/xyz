import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h3>Contact Us</h3>
        <p>EpicVents - Event Management</p>

        <p>Follow us: 
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a> | 
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
        </p>

        <p>&copy; 2025 EpicVents. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
