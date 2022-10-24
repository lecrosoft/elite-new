import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../../data/testimonialsData";
import leftArrow from "../../../assets/leftArrow.png";
import rightArrow from "../../../assets/rightArrow.png";
import { useState } from "react";
const Testimonials = () => {
  const [selected, setSelected] = React.useState(0);
  const arrLength = testimonialsData.length;
  const [counter, setcounter] = useState(1);

  const renderImageComponent = () => {
    setInterval(() => {
      setSelected(2);
    }, 5000);
  };

  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--red)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        {/* {renderImageComponent()} */}
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" srcset="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(arrLength - 1)
                : setSelected((prevState) => prevState - 1);
            }}
            src={leftArrow}
            alt=""
            srcset=""
          />
          <img
            onClick={() => {
              selected === arrLength - 1
                ? setSelected(0)
                : setSelected((prevState) => prevState + 1);
            }}
            src={rightArrow}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
