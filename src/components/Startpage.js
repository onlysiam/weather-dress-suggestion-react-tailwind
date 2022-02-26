import { React, useEffect, useState } from "react";

//image
import logo from "../img/logo.svg";

import { pageAnimation } from "./Animation";

const Startpage = ({ windowheight }) => {
  const [bottom, setbottom] = useState("0");
  useEffect(() => {
    setTimeout(function () {
      setbottom("110");
    }, 1300);
  });

  return (
    <div
      className="w-screen h-screen absolute flex flex-col items-center justify-center bg-bgpurple text-white left-0 bottom-0 z-50"
      height={windowheight}
      bottom={bottom}
      variants={pageAnimation}
      exit="exit"
    >
      <img className="mb-2 h-36" src={logo} alt="hey" />
      <h1>Weather Closet</h1>
    </div>
  );
};

export default Startpage;
