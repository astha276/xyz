import React, { useState, useEffect } from "react";
import "./Corporate.css";

const Corporate = () => {
  const sliderImages = [
    "https://images.squarespace-cdn.com/content/v1/5423dde2e4b00c40b1ccf4cb/b5ba2efe-21aa-4bc3-80d2-012999f58fd4/IMG_9791_textron_aviation_australasia_customer_conference_2022_novasoma_photography.jpg",
    "https://matchboxindia.com/blog/wp-content/uploads/2023/06/MB-Blog-Banners_04.jpg",
    "https://th.bing.com/th/id/OIP.I2ypEFd9Q3Yqij7R6RxQYgHaE8?rs=1&pid=ImgDetMain",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div>
      {/* Image Slider */}
      <div className="image-slider">
        {sliderImages.map((image, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Features Section */}
      <section className="features">
      <h2>Corporate Events</h2>
        <p className="features-intro">We offer premium event management services to elevate your corporate gatherings:</p>
        
        {services.map((service, index) => (
          <div className="feature" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="feature-text">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Centered Book Now Button */}
      <div className="center-book-now">
      <a href="/services" className="book-now-bottom">Book Now</a>
      </div>
    </div>
  );
};

// Corporate Event Services
const services = [
  { 
    title: "Conference Setup", 
    image: "https://i.pinimg.com/originals/4c/a0/d9/4ca0d9f9b5e23b1cf7c96e4c6654db00.jpg", 
    description: "Professional conference setups equipped with modern technology. We create an environment perfect for impactful presentations and discussions." 
  },
  { 
    title: "Networking Spaces", 
    image: "https://i.pinimg.com/originals/82/91/ac/8291ac6006293fb90f14027d81d712a2.png", 
    description: "Elegant spaces designed to foster valuable connections. Ideal for casual networking or formal meet-and-greet sessions." 
  },
  { 
    title: "Corporate Dining & Refreshments", 
    image: "https://financialclub.co.id/images/banquetfac/937025_677702_616484_1.jpg", 
    description: "Tailored corporate dining solutions with refreshments, ensuring a professional and seamless experience for your business meetings and conferences." 
  },
  { 
    title: "Team-Building Activities", 
    image: "https://ethos3.com/wp-content/uploads/2019/12/3-tips-for-surviving-the-season-of-social-gatherings-768x388.jpeg", 
    description: "Engaging and innovative activities designed to strengthen collaboration. Ensure your team leaves motivated and more connected." 
  }
];

export default Corporate;
