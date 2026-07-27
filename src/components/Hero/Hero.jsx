import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Hero.css";
import heroSlides from "./heroData";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const current = heroSlides[currentSlide];

  return (
    <section className="hero">

  {/* Background Image */}
  <img
    src={current.image}
    alt={current.title}
    className="hero-image"
  />

  {/* Overlay */}
  <div className="hero-overlay"></div>

  {/* Left Arrow */}
  <button
    className="slider-arrow left-arrow"
    onClick={prevSlide}
  >
    <FaChevronLeft />
  </button>

  {/* Content */}
  <div className="hero-container">
    <div className="hero-content">

      <p className="hero-subtitle">
        {current.subtitle}
      </p>

      <span className="hero-line"></span>

      <h1 className="hero-title">
        {current.title}
      </h1>

      <p className="hero-description">
        {current.description}
      </p>

      <div className="hero-buttons">
        <button className="primary-btn">
          Apply Now
        </button>

        <button className="secondary-btn">
          Explore Campus
        </button>
      </div>

      <div className="hero-dots">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            className={
              index === currentSlide
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

    </div>
  </div>

  {/* Right Arrow */}
  <button
    className="slider-arrow right-arrow"
    onClick={nextSlide}
  >
    <FaChevronRight />
  </button>

</section>
  );
}

export default Hero;