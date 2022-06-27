import React from "react";
import { ReactComponent as Background } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

const SvgImage = ({ svg }) => {
  return (
    <div className="svg-image">
      <div className="svg-image__icon--wrapper">
        {svg}
        <Background className="svg-image__bg" />
      </div>
    </div>
  );
};

export default SvgImage;
