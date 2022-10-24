import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import "./Subscribe.css";

const Subscribe = () => {
  const form = useRef();
  //    const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_rrehivg', 'template_u8i6gko', form.current, 'YOUR_PUBLIC_KEY')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email to join"
          />
          <button className="btn btn-j">Join</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
