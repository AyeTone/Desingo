import React from "react";
import { motion } from "framer-motion";

const Project = ({ title, desc, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="project"
    >
      <figure className="project__img--wrapper">
        <img src={img} alt="" />
      </figure>
      <div className="project__content">
        <h3 className="project__content--title">{title}</h3>
        <p className="project__content--decs">{desc}</p>
      </div>
    </motion.div>
  );
};

export default Project;
