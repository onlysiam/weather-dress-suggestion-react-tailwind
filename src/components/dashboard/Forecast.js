import { useState, useEffect } from "react";
//image
import searchIcon from "../../img/dashboard/search glass.svg";
//components
import ForecastData from "./ForecastData";
import Place from "./Place";
import ForecastNav from "./ForecastNav";
import CountrySuggestions from "./CountrySuggestions";
import CitySuggestions from "../dashboard/CitySuggestions";
//redux
import { useSelector, useDispatch } from "react-redux";
import { loadWeatherData } from "../../store/weatherdata";
//reducers
import { alertToggleTrue } from "../../store/alerts/alert";
import { dataRequestLoadingToggle } from "../../store/weatherdata";
import { alertToggleFalse } from "../../store/alerts/alert";
import {
  loadCitySuggestions,
  citySuggestionReset,
} from "../../store/citysuggestions";

const Forecast = () => {
  const dispatch = useDispatch();
  const weatherDataError = useSelector(
    (state) => state.entities.weatherData.error
  );
  const countryCodes = useSelector((state) => state.entities.countryCodes.data);
  const citySuggestions = useSelector(
    (state) => state.entities.citySuggestions.data
  );

  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countrySuggestions, setCountrySuggestions] = useState([]);
  //useEffect
  useEffect(() => {
    if (weatherDataError && weatherDataError.type === "error") {
      dispatch(alertToggleTrue(weatherDataError));
      dispatch(dataRequestLoadingToggle());
    }
  }, [weatherDataError]);

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
  const getWeatherDataHandler = () => {
    dispatch(alertToggleFalse());
    if (cityName && countryCode) {
      dispatch(loadWeatherData("direct", cityName, countryCode));
      setCityName("");
      dispatch(citySuggestionReset());
      setCountrySuggestions("");
    }
  };
  return (
    <div className="relative flex w-full h-full flex-col gap-6 justify-center items-start">
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-white rounded pl-2">
          <input
            onChange={cityInputHandler}
            value={cityName}
            className="h-8 px-2 rounded outline-none text-black font-goth placeholder-gray-600 focus:border-primary duration-150"
            type="text"
            placeholder="City"
          />
          <img
            onClick={getWeatherDataHandler}
            className="h-6 cursor-pointer px-1 py-1 rounded hover:bg-secondary duration-150"
            src={searchIcon}
            alt=""
          />
        </div>
        <div className="absolute flex flex-wrap justify-start items-center w-52 max-h-27p px-1 top-12 right-50 bg-white rounded overflow-auto z-30">
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
                  textColor="text-gray-600"
                />
              );
            })}
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            onChange={countryInputHandler}
            value={countryName}
            className="w-40 h-8 px-2 rounded outline-none text-black font-goth placeholder-gray-600 focus:border-primary duration-150"
            type="text"
            placeholder="country"
          />
          <div className="absolute flex flex-wrap justify-start items-center w-40 max-h-27p px-1 top-12 right-50 bg-white rounded overflow-auto z-30">
            {countrySuggestions &&
              countrySuggestions.map((state) => {
                return (
                  <CountrySuggestions
                    key={state.id}
                    state={state}
                    setCountryName={setCountryName}
                    setCountryCode={setCountryCode}
                    setCountrySuggestions={setCountrySuggestions}
                    textColor="text-gray-600"
                  />
                );
              })}
          </div>
        </div>
      </div>
      <h1 className="text-3xl lg:text-4xl text-black font-goth">
        Weather <span className="font-bold">Forecast</span>
      </h1>
      <div className="flex h-27p overflow-hidden">
        <Place />
      </div>
      <ForecastNav />
      <div className="h-27p lg:h-35p w-full">
        <ForecastData />
      </div>
    </div>
  );
};

export default Forecast;
