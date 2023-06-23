import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start?.map((item, index) => {
        return (
          <Carousel.Item>
            <img src={item} alt="Loading error" className="d-block w-100" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default Slider;
