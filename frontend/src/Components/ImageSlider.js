import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img1 from '../Assets/bsdm.png';
import Img2 from '../Assets/kyp.png';
import './All_Style.css';

const ImageSlider = () => {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };
      
        return (
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slide">
                <img src={Img1} alt="Slide 1" className="slider-image" />
              </div>
              <div className="slide">
                <img src={Img2} alt="Slide 2" className="slider-image" />
              </div>
              <div className="slide">
                <img src={Img1} alt="Slide 3" className="slider-image" />
              </div>
              <div className="slide">
                <img src={Img2} alt="Slide 3" className="slider-image" />
              </div>
            </Slider>
          </div>
  );
};

export default ImageSlider;
