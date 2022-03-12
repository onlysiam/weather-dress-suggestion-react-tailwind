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
const Element = ({ body, target, url, setNavMenuSlide }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  //useEffect
  const navigateHandler = () => {
    setNavMenuSlide(false);
    if (url) {
      dispatch(signupWindowToggleFalse());
      dispatch(loginWindowToggleTrue());
      dispatch(authWindowToggle());
    }
    if (!url) dispatch(authWindowToggleFalse());
    if (
      (target === "home" || target === "about" || target === "contact") &&
      location.pathname !== "/home"
    )
      navigate("/home");
  };

  return (
    <Link
      onClick={navigateHandler}
      className="linkNavNotActive flex justify-center items-center h-10 md:h-full cursor-pointer pt-2"
      activeClass="active"
      to={target}
      spy={true}
      smooth={true}
      duration={500}
    >
      <h1 className="text-lg font-bold">{body}</h1>
    </Link>
  );
};

export default Element;
