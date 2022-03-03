import { useEffect, useState } from "react";
//components
import { Button, SelectButton } from "../formComponents/FormComponents";
//images
import bg from "../../img/background pictures/citysearchBg.svg";
import locationImg from "../../img/citysearch page/location.svg";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadWeatherData } from "../../store/weatherdata";
import { forecastWindowToggle } from "../../store/loaders/forecastwindows";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
const Citysearch = () => {
  const dispatch = useDispatch();
  const weatherDataLoading = useSelector(
    (state) => state.entities.weatherData.loading
  );
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("BD");
  //useEffect
  useEffect(() => {
    if (weatherDataLoading.status === "post-fetch") {
      console.log(weatherDataLoading.status);
      dispatch(forecastWindowToggle());
    }
  }, [weatherDataLoading]);
  //handlers
  const cityInputHandler = (e) => {
    setCityName(e.target.value);
  };
  const countryInputHandler = (e) => {
    setCountryName(e.target.value);
  };
  const getWeatherDataHandler = () => {
    const param = cityName + "," + countryName;
    dispatch(loadWeatherData(param));
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex flex-col justify-evenly items-start w-screen px-60"
    >
      <div className="">
        <img
          className="fixed top-0 left-0 h-full w-full z-10 object-cover"
          src={bg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-evenly items-start w-2/3">
        <h1 className="text-white text-5xl font-extrabold font-ubuntu overflow-hidden z-20">
          Where Are You Headed Today?
        </h1>
        <div className="flex justify-center items-start z-20 mt-20">
          <Button body="Current Location" image={locationImg} />
          <SelectButton
            onChange={countryInputHandler}
            value={countryName}
            body="Country"
          />
        </div>
        <div className="flex mt-5 gap-3 w-full justify-bwtween items-start z-20">
          <input
            onChange={cityInputHandler}
            value={cityName}
            className="basis-11/12 border-2 h-11 border-purple-600 outline-none px-4 text-white rounded bg-inputPurple focus:border-primary duration-150"
            type="text"
            placeholder="City/Place"
          />
          <Button onClick={getWeatherDataHandler} mr="mr-0" body="Search" />
        </div>
      </div>
    </motion.div>
  );
};

export default Citysearch;
