import React, { useState, useEffect } from "react";
import "./Social.css";

const Inauguration = () => {
  const sliderImages = [
    "https://thumbs.dreamstime.com/z/usa-inauguration-celebration-presidential-united-states-inaugural-day-washington-dc-fourth-july-party-balloons-207860692.jpg",
    "https://balloonsme.com/cdn/shop/products/Opening-Ceremony-Balloon-arch-Decoration_1200x1200.png?v=1658882697",
    "https://www.inaugural.senate.gov/wp-content/uploads/2020/09/inaugural-events_signing-ceremony_4x6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]); // Fixed: Added dependency

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
        <h2>Inauguration Events</h2>
        <p className="features-intro">We offer premium event management services to make your inauguration event remarkable:</p>
        
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

// Inauguration Party Services
const services = [
  { 
    title: "Ribbon Cutting Ceremony", 
    image: "https://synuma.com/wp-content/uploads/2020/12/shutterstock_1114217525.jpg", 
    description: "A beautifully staged ribbon cutting with elegant decor and a celebratory atmosphere. Perfect for creating a memorable opening moment." 
  },
  { 
    title: "Guest Hospitality", 
    image: "https://2.imimg.com/data2/QD/WW/MY-3079485/dsc_0018-500x500.jpg", 
    description: "Personalized assistance for guests, ensuring everyone feels welcomed and attended to throughout the event." 
  },
  { 
    title: "Catering & Refreshments", 
    image: "https://i.pinimg.com/originals/f5/c2/f4/f5c2f42ca8d2b98b19caffa2cdd7e938.jpg", 
    description: "High-quality catering services offering delightful refreshments and snacks to suit the tone of your inauguration." 
  },
  { 
    title: "Stage & Audio-Visual Setup", 
    image: "https://tse4.mm.bing.net/th/id/OIP.7mtNu-JHRMnXotgzVs7yQAAAAA?rs=1&pid=ImgDetMain", 
    description: "State-of-the-art stage design and AV setup to make speeches, presentations, or performances shine during your event." 
  }
];

export default Inauguration;
