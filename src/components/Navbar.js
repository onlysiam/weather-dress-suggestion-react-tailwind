import React, { useState, useEffect } from "react";
//components
import Element from "./nav/Element";

const Navbar = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100 && !navbarScroll) {
        setNavbarScroll(true);
      }
      if (window.scrollY <= 100) {
        setNavbarScroll(false);
      }
    });
  });
  return (
    <div
      className={
        navbarScroll
          ? "flex justify-between w-screen px-28 py-3 fixed z-30 bg-navPurple transition duration-150"
          : "flex justify-between w-screen px-28 py-3 fixed z-30 transition duration-150"
      }
    >
      <h1 className="text-2xl font-extrabold font-ubuntu text-white">
        Weather Closet
      </h1>
      <div className="flex gap-10">
        <Element body="Home" target="home" />
        <Element body="About" target="about" />
        <Element body="Contact" target="contact" />
        <Element body="Login" target="login" />
      </div>
    </div>
  );
};

export default Navbar;
