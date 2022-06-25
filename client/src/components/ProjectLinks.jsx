import React from "react";
import Web from "../assets/home/mobile/image-web-design.jpg";
import App from "../assets/home/mobile/image-app-design.jpg";
import Graphic from "../assets/home/mobile/image-graphic-design.jpg";
import { ReactComponent as RightArrow } from "../assets/shared/desktop/icon-right-arrow.svg";
import { Link } from "react-router-dom";

const ProjectLinks = ({ isWeb, isApp, isGraphic }) => {
  return (
    <section className="project-links">
      {!isWeb && (
        <Link to="/webdesign" className="project-link">
          <figure className="project-link__img--wrapper">
            <img src={Web} alt="" />
            <div className="project-link__content--bg">
              <div className="project-link__content">
                <h3>Web Design</h3>
                <p>
                  View Projects <RightArrow />{" "}
                </p>
              </div>
            </div>
          </figure>
        </Link>
      )}
      {!isApp && (
        <Link to="" className="project-link">
          <figure className="project-link__img--wrapper">
            <img src={App} alt="" />
            <div className="project-link__content--bg">
              <div className="project-link__content">
                <h3>App Design</h3>
                <p>
                  View Projects <RightArrow />{" "}
                </p>
              </div>
            </div>
          </figure>
        </Link>
      )}
      {!isGraphic && (
        <Link to="" className="project-link">
          <figure className="project-link__img--wrapper">
            <img src={Graphic} alt="" />
            <div className="project-link__content--bg">
              <div className="project-link__content">
                <h3>Graphic Design</h3>
                <p>
                  View Projects <RightArrow />{" "}
                </p>
              </div>
            </div>
          </figure>
        </Link>
      )}
    </section>
  );
};

export default ProjectLinks;
