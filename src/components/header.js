import React from "react";
import "./header.css";
import { ReactComponent as ReactLogo } from "../assets/logo.svg";

const Header = () => {
  return (
    <nav className="nav-Header">
      <div className="div-Logo">
        <ReactLogo />
        Im Head
      </div>
    </nav>
  );
};
export default Header;
