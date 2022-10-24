import React from "react";
import "./Programs.css";
import rightArrow from "../../../assets/rightArrow.png";
const ProgramsCat = (props) => {
  return (
    <div className="category">
      {props.item.image}
      <span>{props.item.heading}</span>
      <span>{props.item.details}</span>
      <div className="join-button">
        <span>Download APP to Join </span>
        <img src={rightArrow} alt="" srcset="" />
      </div>
    </div>
  );
};

export default ProgramsCat;
