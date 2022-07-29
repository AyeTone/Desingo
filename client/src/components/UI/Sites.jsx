import React from "react";
import { ReactComponent as Canada } from "../../assets/shared/desktop/illustration-canada.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Australia } from "../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as UnitedKingdom } from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import SvgImage from "./SvgImage";
import { motion } from "framer-motion";

const Sites = () => {
  const link = (
    <Link to="/locations">
      <button className="sites__btn">See Location</button>
    </Link>
  );

  const parentAnimation = {
    hidden: { opacity: 0.6, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1, delayChildren: 0.5 } },
  };

  const childAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="sites">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={parentAnimation}
        viewport={{ once: true }}
        className="sites__country"
      >
        <SvgImage svg={<Canada />} title="Canada" />
        <motion.h3 variants={childAnimation} className="sites__name">
          Canada
        </motion.h3>
        {link}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={parentAnimation}
        viewport={{ once: true }}
        className="sites__country"
      >
        <SvgImage svg={<Australia />} title="Australia" />
        <motion.h3 variants={childAnimation} className="sites__name">
          Australia
        </motion.h3>
        {link}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={parentAnimation}
        viewport={{ once: true }}
        className="sites__country"
      >
        <SvgImage svg={<UnitedKingdom />} title="United Kingdom" />
        <motion.h3 variants={childAnimation} className="sites__name">
          United Kingdom
        </motion.h3>
        {link}
      </motion.div>
    </section>
  );
};

export default Sites;
