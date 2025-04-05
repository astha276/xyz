import React, { useState, useEffect } from "react";
import "./Birthday.css";

const Birthday = () => {
  const sliderImages = [
    "https://chelseaata.com/wp-content/uploads/2021/09/birthday-party_kids-celebrating-and-throwing-confetti.jpeg",
    "https://i.pinimg.com/originals/96/bf/01/96bf01dfb87b0330c762e5c7ab9e85dc.jpg",
    "https://www.i-eventplanner.com/wp-content/uploads/2018/07/Birthday-Party-planner.jpg",
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
        <h2>Birthday Party</h2>
        <p className="features-intro">We offer premium event management services for unforgettable birthday parties:</p>
        
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

// Birthday Party Services
const services = [
  { 
    title: "Cake Cutting", 
    image: "https://media.istockphoto.com/photos/man-cutting-bright-and-colorful-birthday-cake-picture-id974198528?k=20&m=974198528&s=612x612&w=0&h=IJy_fdSQjT65oJEcSv985Mpjw8im6stNy1PltZ0MY_A=", 
    description: "A special moment with a stunning centerpiece cake, beautifully crafted to match the celebration theme." 
  },
  { 
    title: "Photo Booth", 
    image: "https://tse4.mm.bing.net/th/id/OIP.9IblkEmENLVGaiP0ix2HXQHaFj?rs=1&pid=ImgDetMain", 
    description: "Fun and quirky photo booth setups with themed props to capture joyful moments." 
  },
  { 
    title: "Entertainment Zone", 
    image: "https://tse2.mm.bing.net/th/id/OIP.4pda5r10CYdLy3bUpf9yEwHaFc?rs=1&pid=ImgDetMain", 
    description: "A lively area filled with interactive games, music, and activities to keep everyone engaged." 
  },
  { 
    title: "Party Favors", 
    image: "https://i.pinimg.com/originals/db/69/1d/db691da74eb1eb02e41e6c61dc03ffb1.jpg", 
    description: "Thoughtfully selected party favors that your guests will love." 
  }
];

export default Birthday;
