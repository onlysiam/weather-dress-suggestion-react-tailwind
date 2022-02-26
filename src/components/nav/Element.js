import React from "react";
import { Link } from "react-scroll";
const Element = ({ body, target }) => {
  return (
    <Link
      className="linkNavNotActive"
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      duration={500}
    >
      <h1 className="text-lg cursor-pointer font-bold">{body}</h1>
    </Link>
  );
};

export default Element;
