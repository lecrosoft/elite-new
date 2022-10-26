import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../../assets/hero_image.png";
import hero_image_back from "../../../assets/hero_image_back.png";
import heart from "../../../assets/heart.png";
import calories from "../../../assets/calories.png";
// import styled from "styled-components";
// import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ads Starts */}
        <div className="the-best-ads">
          <div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></div>
          <span>The Best Fitness Club In Town</span>
        </div>

        <div className="heading-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              At Elite Fitness Club, we will help you to shape and build your
              ideal body and live up your life to fullest
            </span>
          </div>
        </div>
        {/* The best ads ends */}

        {/* Figures Start */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={500} start={200} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              <NumberCounter end={450} start={300} delay="4" preFix="+" />
            </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* figures end */}

        {/* BUTTTONS START */}
        <div className="hero-buttons">
          <button className="btn">Download from Playstore</button>
          <button className="btn">Download On App Store</button>
        </div>
        {/* BUTTON ENDS */}
      </div>
      <div className="right-h">
        <button className="btn">Contact Us</button>
        <div className="heart-rate">
          <img src={heart} alt="" srcset="" />
          <span>Heart Rate</span>
          <span>115 bpm</span>
        </div>
        <img
          src={hero_image}
          alt="Hero Image"
          srcset=""
          className="hero-image"
        />
        <img
          src={hero_image_back}
          alt="Hero Image back"
          srcset=""
          className="hero-image-back"
        />
        <div className="calories">
          <img src={calories} alt="" srcset="" />
          <div>
            <span>Calories Burned</span>
            <span>120 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
