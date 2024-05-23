import React from 'react';
import './All_Style.css';

const Testimonial = ({ name, text, image }) => {
  return (
    <div className="testimonial">
      <br /><br />
      <img src={image} alt={name} className="testimonial-image" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

export default Testimonial;
