import React from "react";
import "./header.css";
import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <nav className="nav-Header">
      <div className="div-Logo">
        <Logo />
      </div>
    </nav>
  );
};
export default Header;
