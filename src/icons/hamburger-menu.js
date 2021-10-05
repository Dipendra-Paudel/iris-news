import React from "react";
import "../assets/css/icons/hamburger.css";

const HamburgerMenu = ({ handleClick }) => {
  return (
    <div
      className="space-y-1 cursor-pointer  hamburger-menu relative z-50"
      onclick={handleClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerMenu;
