import React from "react";
import Logo from "../assets/shared/desktop/logo-dark.png";
import { ReactComponent as HamBurger } from "../assets/shared/mobile/icon-hamburger.svg";
import { ReactComponent as Close } from "../assets/shared/mobile/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.classList.remove("menu-open");
    } else {
      setMenuOpen(true);
      document.body.classList += " menu-open";
    }
  }

  return (
    <section className="navbar">
      <Link to="/">
        <figure className="navbar__logo--wrapper">
          <img className="navbar__logo" src={Logo} alt="" />
        </figure>
      </Link>
      <div className="navbar__menu">
        {!menuOpen ? (
          <HamBurger className="navbar__menu--icon" onClick={toggleMenu} />
        ) : (
          <Close className="navbar__menu--icon" onClick={toggleMenu} />
        )}
        <div className="navbar__links--wrapper">
          <ul className="navbar__links">
            <Link to="/about" onClick={toggleMenu}>
              <li className="navbar__link">Our Company</li>
            </Link>
            <Link to="/locations" onClick={toggleMenu}>
              <li className="navbar__link">Locations</li>
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              <li className="navbar__link">Contact</li>
            </Link>
          </ul>
        </div>
      </div>

      <ul className="navbar__links navbar__tablet">
        <Link to="/about" onClick={toggleMenu}>
          <li className="navbar__link">Our Company</li>
        </Link>
        <Link to="/locations" onClick={toggleMenu}>
          <li className="navbar__link">Locations</li>
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          <li className="navbar__link">Contact</li>
        </Link>
      </ul>
    </section>
  );
};

export default Navbar;
