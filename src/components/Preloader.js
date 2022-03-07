import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
import sun from "../img/preloader/sun.svg";
import cloud from "../img/preloader/cloud.svg";
const Preloader = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="preloaderContainer"
    >
      <div className="loader">
        <img className="sun" src={sun} alt="" />
        <img className="cloud" src={cloud} alt="" />
      </div>
    </motion.div>
  );
};

export default Preloader;
