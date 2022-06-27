import React from "react";
import { ReactComponent as Canada } from "../../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as Australia } from "../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as UnitedKingdom } from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import { ReactComponent as Background } from "../../assets/shared/desktop/bg-pattern-small-circle.svg";
import SvgImage from "./SvgImage";

const Sites = () => {
  return (
    <section className="sites">
      <div className="sites__conutry">
        <SvgImage svg={<Canada />} title="Canada" />
      </div>
    </section>
  );
};

export default Sites;
