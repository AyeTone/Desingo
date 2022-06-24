import React from "react";
import { ReactComponent as Background } from "../assets/home/desktop/bg-pattern-hero-home.svg";
import Phone from "../assets/home/mobile/image-phone.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <Background className="hero__background--icon" />
        <div className="hero__content">
          <h1 className="hero__content--title">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="hero__content--para">
            With over 10 years in the industry, experienced in creating fully
            responsive websites, app design, and engaging brand experiences.
            Find out more about our servies.
          </p>
          <button className="hero__content--btn">Learn More</button>
        </div>
        <figure className="hero__phone--wrapper">
          <img className="hero__phone" src={Phone} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
