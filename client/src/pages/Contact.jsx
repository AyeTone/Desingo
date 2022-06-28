import React from "react";
import { Sites } from "../components/UI";
import { ReactComponent as Background } from "../assets/shared/desktop/bg-pattern-two-circles.svg";

const Contact = () => {
  function deny(e) {
    e.preventDefault();
    alert("This is not a real company. Your message will not be sent.");
  }

  return (
    <main className="contact">
      <div className="contact__container">
        <div className="contact__content">
          <div className="contact__text">
            <h2 className="contact__text--header">Contact Us</h2>
            <p className="contact__text--para">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
          <form className="contact__form" onSubmit={(e) => deny(e)}>
            <input
              className="contact__form--input"
              type="text"
              placeholder="Name"
            />
            <input
              className="contact__form--input"
              type="email"
              placeholder="Email"
            />
            <input
              className="contact__form--input"
              type="tel"
              placeholder="Phone"
            />
            <textarea
              className="contact__form--input"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button className="contact__form--submit">Submit</button>
          </form>
        </div>
        <Background className="contact__container--bg" />
      </div>
      <Sites />
    </main>
  );
};

export default Contact;
