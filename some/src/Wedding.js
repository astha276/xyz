import React, { useState, useEffect } from "react";
import "./Wedding.css";

const Wedding = () => {

  const sliderImages = [
    "https://as2.ftcdn.net/v2/jpg/04/84/55/25/1000_F_484552560_LuzML6DiOEsXZRAHG9j0VHk2UpKwKd36.jpg",
    "https://i.pinimg.com/originals/f0/8b/3f/f08b3f60d95e1de522b869879300f59b.jpg",
    "https://www.weddingstats.org/wp-content/uploads/2019/11/06-e1572878327320.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div>
      <div className="image-slider">
        {sliderImages.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <section className="features">
        <h2>Wedding Ceremony</h2>
        <p className="features-intro">
          We provide the following services to make your wedding a memorable and seamless experience:
        </p>
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

      {/* Book Now Button without preselecting "Wedding" */}
      <div className="center-book-now">
      <a href="/services" className="book-now-bottom">Book Now</a>
      </div>
    </div>
  );
};

const services = [
  { title: "Venue Decoration", image: "https://apis.xogrp.com/media-api/images/9ff63684-a8ec-11e5-be52-22000aa61a3e", description: "Beautifully crafted themes to make your venue stand out." },
  { title: "Catering Services", image: "https://wedding-experience.com/wp-content/uploads/2023/02/Image-1140x752.jpg", description: "Delicious menus customized for your taste." },
  { title: "Photography", image: "https://www.orionphotogroup.com/wp-content/uploads/2022/08/Wedding-Photo-Tips-BC-scaled.jpg", description: "Capture every special moment with professional photography." },
  { title: "Haldi Ceremony", image: "https://th.bing.com/th/id/OIP.LtgvgDco414pEBJQhPuQXwHaEK?rs=1&pid=ImgDetMain", description: "Traditional Haldi ceremony arrangements." },
  { title: "Wedding Gifts", image: "https://th.bing.com/th/id/OIP.5TWT9LRwY37BoJ_3-sfTdwHaEK?rs=1&pid=ImgDetMain", description: "Curated wedding favors for your beloved guests." }
];

export default Wedding;
