import React from "react";
import { ReactComponent as Background } from "../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";
import { motion } from "framer-motion";

const Header = ({ title, desc }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="header"
    >
      <div className="header__content">
        <h2 className="header__content--title">{title}</h2>
        <p className="header__content--desc">{desc}</p>
        <Background className="header__bg" />
      </div>
    </motion.header>
  );
};

export default Header;
