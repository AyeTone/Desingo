import React from "react";
import Logo from "../assets/shared/desktop/logo-light.png";
import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Youtube } from "../assets/shared/desktop/icon-youtube.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--top">
          <Link to="/">
            <figure className="footer__img--wrapper">
              <img src={Logo} alt="" />
            </figure>
          </Link>
          <div className="footer__links">
            <Link to="/about">OUR COMPANY</Link>
            <Link to="/locations">LOCATIONS</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="footer__contact">
            <h3>Designo Central Office</h3>
            <p>
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5{" "}
            </p>
          </div>
          <div className="footer__contact">
            <h3>Contact US (Central Office)</h3>
            <p>
              P : +1 253-863-8967 <br />M : contact@designo.co
            </p>
          </div>
          <div className="footer__contact--socials">
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
