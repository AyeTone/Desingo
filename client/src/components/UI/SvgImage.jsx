import React from "react";
import { ReactComponent as Background } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

const SvgImage = ({ svg, title }) => {
  return (
    <div className="svg-image">
      {svg}
      <Background className="svg-image__bg" />
      <h3 className="svg-image__title">{title}</h3>
    </div>
  );
};

export default SvgImage;
