import React from "react";
import { ReactComponent as Icon } from "../assets/shared/mobile/icon-logo.svg";
import { ReactComponent as HamBurger } from "../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as Close } from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }

  return (
    <section className="navbar">
      <div className="navbar__logo">
        <Icon />
        <h1 className="navbar__logo--title">DESIGNO</h1>
      </div>
      <div className={`navbar__menu ${!menuOpen ? "menu-open" : ""}`}>
        {!menuOpen ? (
          <HamBurger className="navbar__menu--icon" onClick={toggleMenu} />
        ) : (
          <Close className="navbar__menu--icon" onClick={toggleMenu} />
        )}
        <div className="navbar__links--wrapper">
          <ul className="navbar__links">
            <li className="navbar__link">Our Company</li>
            <li className="navbar__link">Locations</li>
            <li className="navbar__link">Contact</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
