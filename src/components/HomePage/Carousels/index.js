import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselDes from "./CarouselDes";
import "./stylesCarousel.css";
const carouselData = [
  {
    id: 0,
    imgSrc: "/assets/images/Carousel/slider1.png",
    title: "Perfume Tips Tricks",
    buttonName: "Shop now",
  },
  {
    id: 1,
    imgSrc: "/assets/images/Carousel/slider2.png",
    title: "Perfume Tips Tricks",
    buttonName: "Shop now",
  },
];
const Carousels = () => {
  return (
    <Carousel indicators={false} interval={9000}>
      {carouselData.map((item) => {
        return (
          <Carousel.Item className="carousel" key={item.id}>
            <img
              className="d-block w-100"
              src={item.imgSrc}
              alt="Second slide"
            />
            <CarouselDes title={item.title} buttonName={item.buttonName} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Carousels;
