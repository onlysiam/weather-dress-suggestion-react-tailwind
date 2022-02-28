import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./about/About";
import Home from "./home/Home";
//animations
import { AnimatePresence } from "framer-motion";
import { pageAnimation } from "./Animation";
import Login from "./Login";

const HomeSection = ({ login, setLogin }) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="home"
    >
      <div className={login ? "h-screen" : ""}>
        {login ? (
          <div
            onClick={() => setLogin(false)}
            className="fixed h-full w-full top-0 left-0 z-30 bg-black bg-opacity-50"
          />
        ) : (
          ""
        )}
        <Home />
        <About />
      </div>
      <AnimatePresence>{login ? <Login /> : ""}</AnimatePresence>
    </motion.div>
  );
};

export default HomeSection;
