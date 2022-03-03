import { React, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

//animations
import { motion } from "framer-motion";

//image
import logo from "../img/logo.svg";

import { startPageAnimation } from "./Animation";

const Startpage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(function () {
      navigate("/home");
    }, 1300);
  });

  return (
    <motion.div
      variants={startPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-screen h-screen absolute flex flex-col items-center justify-center bg-primary text-white left-0 z-50 transition duration-500"
    >
      <img className="mb-2 h-36" src={logo} alt="hey" />
      <h1>Weather Closet</h1>
    </motion.div>
  );
};

export default Startpage;
