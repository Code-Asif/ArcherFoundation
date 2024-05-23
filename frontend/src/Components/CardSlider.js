// src/CardSlider.js
import React, { useState } from 'react';
import './All_Style.css';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>&lt;</button>
      <div className="slider-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${index === currentIndex ? 'active' : ''}`}
          >
            {card}
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default CardSlider;
