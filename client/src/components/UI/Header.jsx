import React from "react";
import { ReactComponent as Background } from "../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg";

const Header = ({ title, desc }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__content--title">{title}</h2>
        <p className="header__content--desc">{desc}</p>
        <Background className="header__bg" />
      </div>
    </header>
  );
};

export default Header;
