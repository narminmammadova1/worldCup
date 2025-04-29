'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent({ children }) {
  const settings = {
    dots:false,
    infinite:true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows:false,
    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow:2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
  };

  return <Slider {...settings}>{children}</Slider>;
}
