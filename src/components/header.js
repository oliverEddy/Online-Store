import React from "react";
import "./header.css";
//import { ReactComponent as ReactLogo } from "../assets/logo.svg";
//import { ReactComponent as ReactLogo } from "../assets/logo.jpeg";
import Logo from "../assets/logo.jpeg";
const Header = () => {
  return (
    <nav className="nav-Header">
      <div className="div-Logo">
        <img className="Logo" src={Logo} alt="logo" />
      </div>
    </nav>
  );
};
export default Header;
