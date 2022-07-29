import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Background } from "../assets/shared/desktop/bg-pattern-call-to-action.svg";
import { motion } from "framer-motion";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="call-to-action"
    >
      <div className="call-to-action__wrapper">
        <Background className="call-to-action__bg" />
        <div className="call-to-action__content">
          <h2 className="call-to-action__content--header">
            Let’s talk about your project
          </h2>
          <p className="call-to-action__content--para">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button
          onClick={() => navigate("/contact")}
          className="call-to-action__content--btn"
        >
          Get in touch
        </button>
      </div>
    </motion.section>
  );
};

export default CallToAction;
