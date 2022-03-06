//animation
import { motion, AnimatePresence } from "framer-motion";
import { pageAnimation } from "./Animation";
//components
import Citysearch from "./dashboard/Citysearch";
import Weatherwindow from "./dashboard/Weatherwindow";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { authWindowToggle } from "../store/loaders/authWindow";
const Dashboard = () => {
  const dispatch = useDispatch();
  const authenticationWindowState = useSelector(
    (state) => state.loader.authWindow.state
  );
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
      {authenticationWindowState ? (
        <div
          onClick={() => dispatch(authWindowToggle())}
          className="fixed h-full w-full top-0 left-0 z-30 bg-black bg-opacity-50"
        />
      ) : (
        ""
      )}
      <AnimatePresence exitBeforeEnter>
        {forecastWindow ? <Weatherwindow key={1} /> : <Citysearch key={2} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
