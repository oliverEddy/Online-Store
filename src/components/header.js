import React from "react";
import "./header.css";
import { reactComponent as Logo } from "../assets/logo.svg";
const Header = () => {
  return (
    <nav>
      <div>
        <Logo />
      </div>
    </nav>
  );
};
export default Header;
