import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../css/carausel.css';

const Carousel = () => {
    const images = [
      "https://quizzers.s3.ap-south-1.amazonaws.com/banner1.png",
      "https://quizzers.s3.ap-south-1.amazonaws.com/banner2.png",
    ];
    // const images = [
    //   "https://images.unsplash.com/photo-1533422902779-aff35862e462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1572196459043-5c39f99a7555?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   "https://images.unsplash.com/photo-1533422902779-aff35862e462?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`poster ${index}`} />
          </div>
        ))}
      </Slider>
    );
};

export default Carousel;