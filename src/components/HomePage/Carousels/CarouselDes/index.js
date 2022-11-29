import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselDes = ({ title, buttonName }) => {
  return (
    <Carousel.Caption className="order-first text-center text-sm-start">
      <div className="carouselsDes">
        <h2 className="sliderTitle">{title}</h2>
        <button className="sliderButton">{buttonName}</button>
      </div>
    </Carousel.Caption>
  );
};

export default CarouselDes;
