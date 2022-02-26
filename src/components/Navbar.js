import * as React from "react";
//components
import Element from "./nav/Element";

const Navbar = () => {
  return (
    <div className="flex justify-between w-screen px-28 py-6 fixed">
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
