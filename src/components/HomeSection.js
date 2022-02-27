import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./about/About";
import Home from "./home/Home";
//animations
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
      <div className={login ? "fixed" : ""}>
        {login ? (
          <div
            onClick={() => setLogin(false)}
            className="fixed h-full w-full top-0 left-0 z-40 bg-black bg-opacity-50"
          />
        ) : (
          ""
        )}
        <Home />
        <About />
      </div>
      {login ? <Login /> : ""}
    </motion.div>
  );
};

export default HomeSection;
