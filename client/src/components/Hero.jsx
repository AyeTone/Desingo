import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Background } from "../assets/home/desktop/bg-pattern-hero-home.svg";

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
          <Link to="/about">
            <button className="hero__content--btn">Learn More</button>
          </Link>
        </div>
        <figure className="hero__phone--wrapper">
          <div className="hero__phone"></div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
