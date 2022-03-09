import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import profilePic from "../img/pp.jpg";
//animation
import { AnimatePresence } from "framer-motion";
//components
import Element from "./nav/Element";
import Menu from "./nav/Menu";
//redux
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const userInfo = useSelector((state) => state.entities.user);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60 && !navbarScroll) {
        setNavbarScroll(true);
      }
      if (window.scrollY <= 60) {
        setNavbarScroll(false);
      }
    });
  });
  return (
    <div
      className={
        navbarScroll
          ? "flex justify-between items-center h-14 w-screen px-28 py-2 fixed z-50 bg-navPurple transition duration-150 over overflow-visible"
          : "flex justify-between items-center h-14 w-screen px-28 py-2 fixed z-50 transition duration-150 overflow-visible"
      }
    >
      <h1
        onClick={() => navigate("home")}
        className="text-2xl font-extrabold font-ubuntu text-white cursor-pointer"
      >
        Weather Closet
      </h1>
      <div className="flex justify-center items-center h-full gap-10 overflow-hidden">
        <Element body="Home" target="home" />
        <Element body="About" target="about" />
        <Element body="Contact" target="contact" />
        {authenticated ? (
          <div className="relative h-10 w-10 rounded-full cursor-pointer">
            <img
              onClick={() => setMenu(!menu)}
              className="absolute h-full w-full top-0 left-0 object-cover"
              src={userInfo.profilepic}
              alt=""
            />
          </div>
        ) : (
          <Element body="Login" target="login" url="true" />
        )}
        <AnimatePresence>
          {menu ? (
            <div className="absolute w-15p top-14 right-28 mt-1 duration-150">
              <Menu key={1} navbarScroll={navbarScroll} setMenu={setMenu} />
            </div>
          ) : (
            ""
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
