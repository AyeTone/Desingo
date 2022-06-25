import React from "react";

const Header = ({ title, desc }) => {
  return (
    <section className="header">
      <div className="header__content">
        <h2 className="header__content--title">{title}</h2>
        <p className="header__content--desc">{desc}</p>
      </div>
    </section>
  );
};

export default Header;
