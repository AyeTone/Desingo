import React from "react";
import { ReactComponent as Background } from "../../assets/about/mobile/bg-pattern-hero-about-mobile.svg";

const MappedLocation = (props) => {
  const { title, area, address1, address2, phone, email } = props;

  return (
    <div className="mapped-location">
      <div className="mapped-location__content">
        <h2 className="mapped-location__content--title">{title}</h2>
        <div className="mapped-location__bottom">
          <div className="mapped-location__content--desc">
            <h3>Designo {area} Office</h3>
            <p>
              {address1} <br />
              {address2}{" "}
            </p>
          </div>
          <div className="mapped-location__content--desc">
            <h3>Contact</h3>
            <p>
              P : {phone} <br />M : {email}
            </p>
          </div>
        </div>
        <Background className="mapped-location__content--bg" />
      </div>
    </div>
  );
};

export default MappedLocation;
