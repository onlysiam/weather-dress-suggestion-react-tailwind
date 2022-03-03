//animation
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "./Animation";
//components
import Citysearch from "./dashboard/Citysearch";
import Weatherwindow from "./dashboard/Weatherwindow";
//redux
import { useSelector } from "react-redux";
const Dashboard = () => {
  const forecastWindow = useSelector(
    (state) => state.loader.forecastWindow.state
  );
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-center items-center w-screen h-screen overflow-hidden"
    >
      <AnimatePresence exitBeforeEnter>
        {forecastWindow ? <Weatherwindow key={1} /> : <Citysearch key={2} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
