import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//components
import Element from "./nav/Element";

const Navbar = () => {
  const navigate = useNavigate();
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
      <h1
        onClick={() => navigate("home")}
        className="text-2xl font-extrabold font-ubuntu text-white cursor-pointer"
      >
        Weather Closet
      </h1>
      <div className="flex gap-10">
        <Element body="Home" target="home" />
        <Element body="About" target="about" />
        <Element body="Contact" target="contact" />
        <Element body="Login" target="/home/login" url="true" />
      </div>
    </div>
  );
};

export default Navbar;
