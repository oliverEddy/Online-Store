import React from "react";
import "./header.css";
import Logo from "../assets/logo.jpeg";
const Header = () => {
  return (
    <div className="header-cont">
      <nav className="nav-Header">
        <div className="div-Logo">
          <img className="Logo" src={Logo} alt="logo" />
        </div>
      </nav>
    </div>
  );
};
export default Header;
