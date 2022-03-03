import React from "react";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
//reducer
import {
  authWindowToggle,
  authWindowToggleFalse,
} from "../../store/loaders/authWindow";
import { signupWindowToggleFalse } from "../../store/loaders/signupWindow";
import { loginWindowToggleTrue } from "../../store/loaders/loginWindow";
const Element = ({ body, target, url }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  //useEffect
  const navigateHandler = () => {
    if (url) {
      dispatch(signupWindowToggleFalse());
      dispatch(loginWindowToggleTrue());
      dispatch(authWindowToggle());
    }
    if (!url) dispatch(authWindowToggleFalse());
    if (
      target === "home" ||
      "about" ||
      ("contact" && location.pathname !== "/home")
    )
      navigate("/home");
  };

  return (
    <Link
      onClick={navigateHandler}
      className="linkNavNotActive"
      activeClass="active"
      to="{target}"
      spy={true}
      smooth={true}
      duration={500}
    >
      <h1 className="text-lg cursor-pointer font-bold">{body}</h1>
    </Link>
  );
};

export default Element;
