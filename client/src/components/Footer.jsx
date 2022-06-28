import React from "react";
import Logo from "../assets/shared/desktop/logo-light.png";
import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Youtube } from "../assets/shared/desktop/icon-youtube.svg";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--top">
          <figure
            onClick={() => navigate("/Designo/")}
            className="footer__img--wrapper"
          >
            <img src={Logo} alt="" />
          </figure>
          <div className="footer__links">
            <Link className="footer__link" to="/about">
              OUR COMPANY
            </Link>
            <Link className="footer__link" to="/locations">
              LOCATIONS
            </Link>
            <Link className="footer__link" to="/contact">
              CONTACT
            </Link>
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
            <Facebook className="footer__icon" />
            <Youtube className="footer__icon" />
            <Twitter className="footer__icon" />
            <Pinterest className="footer__icon" />
            <Instagram className="footer__icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
