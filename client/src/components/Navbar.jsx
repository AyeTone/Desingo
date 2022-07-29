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
    <nav className="navbar">
      <Link to="/Designo/">
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
            <li className="navbar__link">
              <Link to="/about" onClick={toggleMenu}>
                Our Company
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/locations" onClick={toggleMenu}>
                Locations
              </Link>
            </li>
            <li className="navbar__link">
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="navbar__links navbar__tablet">
        <li className="navbar__link">
          <Link to="/about">Our Company</Link>
        </li>
        <li className="navbar__link">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="navbar__link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
