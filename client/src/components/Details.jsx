import React from "react";
import { ReactComponent as Passionate } from "../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as Resourceful } from "../assets/home/desktop/illustration-resourceful.svg";
import { ReactComponent as Friendly } from "../assets/home/desktop/illustration-friendly.svg";
import SvgImage from "./UI/SvgImage";
import { motion } from "framer-motion";

const Details = () => {
  const parent = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delayChildren: 0.5 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="details">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parent}
        className="details__section"
      >
        <SvgImage svg={<Passionate />} />
        <motion.div variants={child}>
          <h3 className="details__section--title">Passionate</h3>
          <p className="details__section--para">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parent}
        className="details__section"
      >
        <SvgImage svg={<Resourceful />} />
        <motion.div variants={child}>
          <h3 className="details__section--title">Resourceful</h3>
          <p className="details__section--para">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={parent}
        className="details__section"
      >
        <SvgImage svg={<Friendly />} />
        <motion.div variants={child}>
          <h3 className="details__section--title">Friendly</h3>
          <p className="details__section--para last">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Details;
