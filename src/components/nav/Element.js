import React from "react";
import { Link } from "react-scroll";
const Element = ({ body, target }) => {
  return (
    <Link
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      duration={500}
      offset={-110}
    >
      <h1 className="text-lg cursor-pointer font-bold text-white">{body}</h1>
    </Link>
  );
};

export default Element;
