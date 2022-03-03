import { useState } from "react";
//image
import searchIcon from "../../img/dashboard/search glass.svg";
//redux
import { useDispatch } from "react-redux";
import { loadWeatherData } from "../../store/weatherdata";

//components
import { SelectButton } from "../formComponents/FormComponents";
import ForecastData from "./ForecastData";
import Place from "./Place";
import ForecastNav from "./ForecastNav";
const Forecast = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("BD");

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
    <div className="flex w-full h-full flex-col gap-6 justify-center items-start">
      <div className="flex gap-2">
        <div className="flex justify-center items-center bg-white rounded pl-2">
          <img
            onClick={getWeatherDataHandler}
            className="h-6 cursor-pointer"
            src={searchIcon}
            alt=""
          />
          <input
            onChange={cityInputHandler}
            value={cityName}
            className="h-8 pl-2 rounded outline-none text-black font-goth placeholder-gray-600 focus:border-bgpurple duration-150"
            type="text"
          />
        </div>
        <SelectButton
          onChange={countryInputHandler}
          value={countryName}
          bg="bg-white"
          text="text-black"
          body="Country"
          py="py-0"
          px="px-1"
          mr="mr-0"
          h="h-8"
        />
      </div>
      <h1 className="text-4xl text-black font-goth">
        Weather <span className="font-bold">Forecast</span>
      </h1>
      <div className="flex h-30p">
        <Place />
      </div>
      <ForecastNav />
      <div className="h-35p w-full">
        <ForecastData />
      </div>
    </div>
  );
};

export default Forecast;
