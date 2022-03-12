import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import dpAlt from "../img/profile props/profile picture placeholder.svg";
//animation
import { AnimatePresence } from "framer-motion";
//components
import Element from "./nav/Element";
import Menu from "./nav/Menu";
import Hamburgermenu from "./nav/Hamburgermenu";
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
  const [navMenuSlide, setNavMenuSlide] = useState(false);
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
        (navbarScroll ? "bg-navPurple " : "") +
        "fixed flex justify-between items-center sm:items-center h-16 sm:h-14 w-screen sm:px-28 sm:py-2 z-50 transition duration-150 overflow-visible"
      }
    >
      <h1
        onClick={() => navigate("home")}
        className="hidden sm:flex sm:text-2xl py-3 sm:py-0 font-extrabold font-ubuntu w-full text-white cursor-pointer"
      >
        Weather Closet
      </h1>
      <div className="px-8 py-3 z-30 sm:hidden">
        <Hamburgermenu onClick={() => setNavMenuSlide(!navMenuSlide)} />
      </div>
      <div className="flex w-full justify-end gap-10">
        <div
          className={
            (navMenuSlide ? "translate-x-0 " : "translate-x-full ") +
            "absolute top-0 right-0 sm:relative flex flex-col sm:flex-row justify-evenly sm:justify-end items-center h-105vh w-52 sm:w-auto sm:h-full sm:gap-10 bg-compliment sm:bg-transparent sm:translate-x-0 overflow-visible duration-300"
          }
        >
          <Element
            body="Home"
            target="home"
            setNavMenuSlide={setNavMenuSlide}
          />
          <Element
            body="About"
            target="about"
            setNavMenuSlide={setNavMenuSlide}
          />
          <Element
            body="Contact"
            target="contact"
            setNavMenuSlide={setNavMenuSlide}
          />
        </div>
        {authenticated ? (
          <div className="relative h-10 w-10 right-8 sm:top-0 sm:right-0 rounded-full cursor-pointer">
            <img
              onClick={() => setMenu(!menu)}
              className="absolute h-full w-full top-0 left-0 object-cover"
              src={userInfo.profilepic ? userInfo.profilepic : dpAlt}
              alt=""
            />
          </div>
        ) : (
          <div className="mr-8 sm:mr-0">
            <Element
              body="Login"
              target="login"
              url="true"
              setNavMenuSlide={setNavMenuSlide}
            />
          </div>
        )}
        <AnimatePresence>
          {menu ? (
            <div className="absolute w-40 top-16 sm:top-14 right-8 sm:right-28 mt-1 duration-150">
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
