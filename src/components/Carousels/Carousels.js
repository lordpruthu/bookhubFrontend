import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./slider-image-1-1920x700.jpg";
import image2 from "./slider-image-2-1920x700.jpg";
import image3 from "./slider-image-3-1920x700.jpg";
import "./carousels.css";

//import React from "react";
//import { Carousel } from "react-bootstrap";
import Typing from "react-typing-animation";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <Typing>
            <Typing.Delay ms={2000} />
            <h5 className="h5">BookHUB</h5>
            <Typing.Delay ms={3000} />
            <h3 className="h3">Everything You need, Everything we Provide</h3>
          </Typing>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <Typing>
            <Typing.Delay ms={2000} />
            <h5 className="h5">BookHUB</h5>
            <Typing.Delay ms={3000} />
            <h3 className="h3">Everything You need, Everything we Provide</h3>
          </Typing>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <Typing>
            <Typing.Delay ms={2000} />
            <h5 className="h5">BookHUB</h5>
            <Typing.Delay ms={3000} />
            <h3 className="h3">Everything You need, Everything we Provide</h3>
          </Typing>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
