import CurrentWeather from "./CurrentWeather";
import DressSuggestion from "./DressSuggestion";
import Forecast from "./Forecast";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
const Weatherwindow = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-center items-center w-screen h-screen bg-primary mt-10"
    >
      <div className="flex flex-col justify-center items-center h-85p w-27p bg-bluishBlack rounded-l-xl">
        <CurrentWeather />
        <DressSuggestion />
      </div>
      <div className="flex flex-col justify-center h-85p w-60p bg-bluishWhite rounded-r-xl px-8">
        <Forecast />
      </div>
    </motion.div>
  );
};

export default Weatherwindow;
