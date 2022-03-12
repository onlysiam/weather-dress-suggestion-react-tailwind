import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//image
import bg from "../img/background pictures/authenticatin.svg";
//Animations
import { motion, AnimatePresence } from "framer-motion";
import { authPageAnimation } from "./Animation";
//components
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { alertToggleTrue } from "../store/alerts/alert";
import { authWindowToggleFalse } from "../store/loaders/authWindow";
import { loginWindowToggleFalse } from "../store/loaders/loginWindow";
import { authReceived } from "../store/auth";
const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const loginState = useSelector((state) => state.loader.loginWindow.state);
  const signupState = useSelector((state) => state.loader.signupWindow.state);

  useEffect(() => {
    if (authenticated) {
      if (signupState) {
        dispatch(
          alertToggleTrue({
            type: "success",
            message: "Successfully Signed Up.",
          })
        );
        navigate("/profile");
      }
      if (loginState)
        dispatch(
          alertToggleTrue({
            type: "success",
            message: "Successfully Logged In.",
          })
        );
      dispatch(loginWindowToggleFalse());
      dispatch(authWindowToggleFalse());
      setTimeout(() => {
        dispatch(authReceived());
      }, 1000);
    }
  }, [authenticated]);
  return (
    <motion.div
      name="login"
      className="absolute h-full w-full sm:max-w-2xl top-0 right-0 flex flex-col items-center justify-center z-40"
      variants={authPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <img
          className="absolute h-full object-cover top-0 left-0 z-40"
          src={bg}
          alt=""
        />
      </div>
      <AnimatePresence exitBeforeEnter>
        {loginState ? <Login key={1} /> : ""}
        {signupState ? <Signup key={2} /> : ""}
      </AnimatePresence>
    </motion.div>
  );
};

export default Authentication;
