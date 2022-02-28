import React from "react";
import { Link } from "react-scroll";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import {
  authWindowToggle,
  authWindowToggleFalse,
} from "../../store/loaders/authWindow";
import { signupWindowToggleFalse } from "../../store/loaders/signupWindow";
import {
  loginWindowToggleTrue,
  loginWindowToggleFalse,
} from "../../store/loaders/loginWindow";
const Element = ({ body, target, url }) => {
  const dispatch = useDispatch();
  const navigateHandler = () => {
    if (url) {
      dispatch(authWindowToggle());
    }
    if (!url) dispatch(authWindowToggleFalse());
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
