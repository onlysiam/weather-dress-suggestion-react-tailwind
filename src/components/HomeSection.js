import { motion } from "framer-motion";
import About from "./about/About";
import Home from "./home/Home";
//animations
import { pageAnimation } from "./Animation";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { authWindowToggle } from "../store/loaders/authWindow";

const HomeSection = () => {
  const dispatch = useDispatch();
  const authenticationWindowState = useSelector(
    (state) => state.loader.authWindow.state
  );
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="home"
    >
      <div className={authenticationWindowState ? "h-screen" : ""}>
        {authenticationWindowState ? (
          <div
            onClick={() => dispatch(authWindowToggle())}
            className="fixed h-full w-full top-0 left-0 z-30 bg-black bg-opacity-50"
          />
        ) : (
          ""
        )}
        <Home />
        <About />
      </div>
    </motion.div>
  );
};

export default HomeSection;
