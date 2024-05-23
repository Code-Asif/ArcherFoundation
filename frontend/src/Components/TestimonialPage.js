import React from 'react';
import Testimonial from './Testimonial'
import './All_Style.css';
import Asif from '../Assets/asif.jpeg';
import kamran from '../Assets/kamran.jpg';
import kshijit from '../Assets/kshijit.png';



const testimonials = [
  {
    name: 'Asif Alam',
    text: 'This product is amazing! Highly recommend to everyone.',
    image: Asif
  },
  {
    name: 'Kamran Alam',
    text: 'Exceptional quality and fantastic customer service.',
    image: kamran
  },
  {
    name: 'Kshijit Verma',
    text: 'A game-changer for our business. Five stars!',
    image: kshijit
  },
];

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <h2 className="page-title">What Our Customers Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
