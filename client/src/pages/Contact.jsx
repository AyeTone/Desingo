import React from "react";
import { Sites } from "../components/UI";
import { ReactComponent as Background } from "../assets/shared/desktop/bg-pattern-two-circles.svg";
import { motion } from "framer-motion";

const Contact = () => {
  function deny(e) {
    e.preventDefault();
    alert("This is not a real company. Your message will not be sent.");
  }

  return (
    <main className="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="contact__container"
      >
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
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="contact__form--input"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="contact__form--input"
              type="tel"
              placeholder="Phone"
            />
            <textarea
              className="contact__form--input"
              placeholder="Your Message"
              name="message"
              rows="5"
            ></textarea>
            <button className="contact__form--submit">Submit</button>
          </form>
        </div>
        <Background className="contact__container--bg" />
      </motion.div>
      <Sites />
    </main>
  );
};

export default Contact;
