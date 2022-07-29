import React from "react";
import { ReactComponent as RightArrow } from "../assets/shared/desktop/icon-right-arrow.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectLinks = (props) => {
  const { isWeb, isApp, isGraphic, isHome } = props;
  const navigate = useNavigate();

  return (
    <section
      className={`project-links ${isHome ? "project-links__desktop" : ""} `}
    >
      {!isWeb && (
        <motion.figure
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onClick={() => navigate("/webdesign")}
          className={`project-link ${isHome ? "project-link__desktop" : ""}`}
        >
          <div className="project-link__img--web"></div>
          <div className="project-link__content--bg">
            <div className="project-link__content">
              <h3>Web Design</h3>
              <p>
                View Projects <RightArrow />{" "}
              </p>
            </div>
          </div>
        </motion.figure>
      )}

      {!isApp && (
        <motion.figure
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onClick={() => navigate("/appdesign")}
          className="project-link"
        >
          <div className="project-link__img--app"></div>
          <div className="project-link__content--bg">
            <div className="project-link__content">
              <h3>App Design</h3>
              <p>
                View Projects <RightArrow />{" "}
              </p>
            </div>
          </div>
        </motion.figure>
      )}
      {!isGraphic && (
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          onClick={() => navigate("/graphicdesign")}
          className="project-link"
        >
          <div className="project-link__img--graphic"></div>
          <div className="project-link__content--bg">
            <div className="project-link__content">
              <h3>Graphic Design</h3>
              <p>
                View Projects <RightArrow />{" "}
              </p>
            </div>
          </div>
        </motion.figure>
      )}
    </section>
  );
};

export default ProjectLinks;
