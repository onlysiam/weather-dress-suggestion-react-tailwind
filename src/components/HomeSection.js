import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./about/About";
import Home from "./home/Home";
//animations
import { pageAnimation } from "./Animation";

const HomeSection = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="home"
    >
      <Home />
      <About />
      <Outlet />
    </motion.div>
  );
};

export default HomeSection;
