import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
const Element = ({ body, target, url, setLogin, login }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    if (url) setLogin(!login);
    if (!url) setLogin(false);
  };
  return (
    <Link
      onClick={navigateHandler}
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
