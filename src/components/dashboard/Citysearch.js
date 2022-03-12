import { useEffect, useState } from "react";
//components
import { Button } from "../formComponents/FormComponents";
import CountrySuggestions from "../dashboard/CountrySuggestions";
import CitySuggestions from "../dashboard/CitySuggestions";
//images
import bg from "../../img/background pictures/citysearchBg.svg";
import locationImg from "../../img/citysearch page/location.svg";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadWeatherData } from "../../store/weatherdata";
import { forecastWindowToggle } from "../../store/loaders/forecastwindows";
//reducers
import { alertToggleTrue } from "../../store/alerts/alert";
import { dataRequestLoadingToggle } from "../../store/weatherdata";
import {
  loadCitySuggestions,
  citySuggestionReset,
} from "../../store/citysuggestions";
import { alertToggleFalse } from "../../store/alerts/alert";
const Citysearch = () => {
  const dispatch = useDispatch();
  const weatherDataLoading = useSelector(
    (state) => state.entities.weatherData.loading
  );
  const weatherDataError = useSelector(
    (state) => state.entities.weatherData.error
  );
  const citySuggestions = useSelector(
    (state) => state.entities.citySuggestions.data
  );
  const countryCodes = useSelector((state) => state.entities.countryCodes.data);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  //useEffect
  useEffect(() => {
    if (weatherDataLoading.status === "post-fetch") {
      console.log(weatherDataLoading.status);
      dispatch(forecastWindowToggle());
    }
    if (weatherDataError && weatherDataError.type === "error") {
      dispatch(alertToggleTrue(weatherDataError));
      dispatch(dataRequestLoadingToggle());
    }
  }, [weatherDataLoading, weatherDataError]);
  //handlers
  const cityInputHandler = (e) => {
    setCityName(e.target.value);
    if (e.target.value.length > 1) {
      dispatch(loadCitySuggestions(e.target.value));
    }
    if (e.target.value.length === 0) {
      dispatch(citySuggestionReset());
    }
  };

  const countryInputHandler = (e) => {
    setCountryName(e.target.value);
    setCountrySuggestions(
      countryCodes.filter((state) => {
        const regex = new RegExp(`^${e.target.value}`, "gi");
        return state.countryName.match(regex);
      })
    );
    if (e.target.value.length === 0) setCountrySuggestions("");
  };
  const currentLocationHandler = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          dispatch(alertToggleFalse());
          if (position.coords.latitude && position.coords.longitude)
            dispatch(
              loadWeatherData(
                "reverse",
                position.coords.latitude,
                position.coords.longitude
              )
            );
        },
        function (error) {
          dispatch(alertToggleTrue({ type: "error", message: error.message }));
        }
      );
    } else {
      console.log("Not Available");
    }
    // dispatch(alertToggleFalse());
    // const param = cityName + "," + countryName;
    // if (cityName && countryName) dispatch(loadWeatherData(param));
  };
  const getWeatherDataHandler = () => {
    dispatch(alertToggleFalse());
    if (cityName && countryCode)
      dispatch(loadWeatherData("direct", cityName, countryCode));
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="relative flex flex-col justify-center items-center sm:items-start w-screen h-screen px-0 sm:px-60"
    >
      <div className="">
        <img
          className="fixed top-0 left-0 h-full w-full z-10 object-cover"
          src={bg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-evenly items-start w-90p sm:w-2/3">
        <h1 className="text-white text-5xl font-extrabold font-ubuntu overflow-hidden z-20">
          Where Are You Headed Today?
        </h1>
        <div className="flex justify-center items-start z-20 mt-20">
          <Button
            onClick={currentLocationHandler}
            body="Current Location"
            image={locationImg}
          />
        </div>
        <div className="flex mt-5 gap-3 w-full justify-bwtween items-start z-20">
          <input
            onChange={cityInputHandler}
            value={cityName}
            className="border-2 h-11 border-purple-600 outline-none px-4 text-white rounded bg-inputPurple focus:border-primary duration-150"
            type="text"
            placeholder="City/Place"
          />{" "}
          <div className="absolute flex flex-wrap justify-start items-center border-purple-600 bg-opacity-30 w-56 max-h-27p top-98 px-1 bg-white rounded overflow-auto">
            {citySuggestions &&
              citySuggestions.map((state) => {
                return (
                  <CitySuggestions
                    key={state.id}
                    state={state}
                    setCityName={setCityName}
                    setCountryName={setCountryName}
                    setCountryCode={setCountryCode}
                    setCountrySuggestions={setCountrySuggestions}
                    textColor="text-gray-300"
                  />
                );
              })}
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              onChange={countryInputHandler}
              value={countryName}
              className="border-2 h-11 w-48 border-purple-600 outline-none px-4 text-white rounded bg-inputPurple focus:border-primary duration-150"
              type="text"
              placeholder="country"
            />
            <div className="absolute flex flex-wrap justify-start items-center border-purple-600 bg-opacity-30 w-48 max-h-27p top-98 px-1 bg-white rounded overflow-auto">
              {countrySuggestions &&
                countrySuggestions.map((state) => {
                  return (
                    <CountrySuggestions
                      key={state.id}
                      state={state}
                      setCountryName={setCountryName}
                      setCountryCode={setCountryCode}
                      setCountrySuggestions={setCountrySuggestions}
                      textColor="text-gray-300"
                    />
                  );
                })}
            </div>
          </div>
          <Button onClick={getWeatherDataHandler} margin="mr-0" body="Search" />
        </div>
      </div>
    </motion.div>
  );
};

export default Citysearch;
