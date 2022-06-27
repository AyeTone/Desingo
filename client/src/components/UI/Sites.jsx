import React from "react";
import { ReactComponent as Canada } from "../../assets/shared/desktop/illustration-canada.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Australia } from "../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as UnitedKingdom } from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import SvgImage from "./SvgImage";

const Sites = () => {
  const link = (
    <Link to="/locations">
      <button className="sites__btn">See Location</button>
    </Link>
  );

  return (
    <section className="sites">
      <div className="sites__country">
        <SvgImage svg={<Canada />} title="Canada" />
        {link}
      </div>
      <div className="sites__country">
        <SvgImage svg={<Australia />} title="Australia" />
        {link}
      </div>
      <div className="sites__country">
        <SvgImage svg={<UnitedKingdom />} title="United Kingdom" />
        {link}
      </div>
    </section>
  );
};

export default Sites;
