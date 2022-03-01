//animation
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
//components
import Citysearch from "./dashboard/Citysearch";
import Weather from "./dashboard/Weather";
const Dashboard = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="home"
      className="flex justify-center items-center w-screen h-screen"
    >
      <Weather />
    </motion.div>
  );
};

export default Dashboard;
