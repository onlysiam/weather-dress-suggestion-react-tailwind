//image
import bg from "../img/login props/loginBg.svg";
//Animations
import { motion } from "framer-motion";
import { loginPageAnimation } from "./Animation";
//components
import Login from "./authentication/Login";
//redux
import { useSelector, useDispatch } from "react-redux";
const Authentication = () => {
  const loginState = useSelector((state) => state.loader.loginWindow.state);
  return (
    <motion.div
      name="login"
      className="absolute h-screen max-w-2xl top-0 right-0 flex flex-col items-center justify-center z-40"
      variants={loginPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div>
        <img
          className="absolute h-full object-cover top-0 left-0 z-10"
          src={bg}
          alt=""
        />
      </div>
      {loginState ? <Login /> : ""}
    </motion.div>
  );
};

export default Authentication;
