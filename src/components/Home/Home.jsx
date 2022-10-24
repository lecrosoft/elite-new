import React from "react";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Plans from "./Plans/Plans";
import Programs from "./Programs/Programs";
import Reasons from "./Reasons/Reasons";
import Subscribe from "./Subscribe/Subscribe";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
