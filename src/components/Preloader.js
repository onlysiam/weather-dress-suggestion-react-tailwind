import React from "react";
import sun from "../img/preloader/sun.svg";
import cloud from "../img/preloader/cloud.svg";
const Preloader = () => {
  return (
    <div className="preloaderContainer">
      <div className="loader">
        <img className="sun" src={sun} alt="" />
        <img className="cloud" src={cloud} alt="" />
      </div>
    </div>
  );
};

export default Preloader;
