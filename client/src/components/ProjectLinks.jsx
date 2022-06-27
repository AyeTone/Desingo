import React from "react";
import { ReactComponent as RightArrow } from "../assets/shared/desktop/icon-right-arrow.svg";
import { useNavigate } from "react-router-dom";

const ProjectLinks = ({ isWeb, isApp, isGraphic }) => {
  const navigate = useNavigate();

  return (
    <section className="project-links">
      {!isWeb && (
        <figure onClick={() => navigate("/webdesign")} className="project-link">
          <div className="project-link__img--web"></div>
          <div className="project-link__content--bg">
            <div className="project-link__content">
              <h3>Web Design</h3>
              <p>
                View Projects <RightArrow />{" "}
              </p>
            </div>
          </div>
        </figure>
      )}
      {!isApp && (
        <figure onClick={() => navigate("/appdesign")} className="project-link">
          <div className="project-link__img--app"></div>
          <div className="project-link__content--bg">
            <div className="project-link__content">
              <h3>App Design</h3>
              <p>
                View Projects <RightArrow />{" "}
              </p>
            </div>
          </div>
        </figure>
      )}
      {!isGraphic && (
        <figure
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
        </figure>
      )}
    </section>
  );
};

export default ProjectLinks;
