import React from "react";

const Project = ({ title, desc, img }) => {
  return (
    <div className="project">
      <figure className="project__img--wrapper">
        <img src={img} alt="" />
      </figure>
      <div className="project__content">
        <h3 className="project__content--title">{title}</h3>
        <p className="project__content--decs">{desc}</p>
      </div>
    </div>
  );
};

export default Project;
