//image
import bg from "../img/background pictures/authenticatin.svg";
//Animations
import { motion, AnimatePresence } from "framer-motion";
import { authPageAnimation } from "./Animation";
//components
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
//redux
import { useSelector } from "react-redux";
const Authentication = () => {
  const loginState = useSelector((state) => state.loader.loginWindow.state);
  const signupState = useSelector((state) => state.loader.signupWindow.state);
  return (
    <motion.div
      name="login"
      className="absolute h-screen max-w-2xl top-0 right-0 flex flex-col items-center justify-center z-40"
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
