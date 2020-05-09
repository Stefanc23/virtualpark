import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickCarousel(props) {
  const [items, setItems] = useState([]);
  const onClick = props.onClick;

  useEffect(() => {
    setItems(props.items);
  }, [props.items])

  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="carousel">
      <div className="slick-carousel">
        <Slider {...settings}>
            {items.map(item => (
              <div id={item._id} className="d-flex flex-column justify-content-center align-items-center p-2" onClick={onClick}>
                <img id={item._id} src={item.image} alt="" className="w-100"/>
                <h6 id={item._id} className="text-center w-100">{item.name}</h6>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlickCarousel;