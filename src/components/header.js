import React from "react";
import "./header.css";
import { ReactComponent as svg } from "../assets/Logo";
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
