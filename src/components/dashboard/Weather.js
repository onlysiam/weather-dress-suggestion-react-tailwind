import CurrentWeather from "./CurrentWeather";
import DressSuggestion from "./DressSuggestion";
import { SelectButton } from "../formComponents/FormComponents";
import Forecast from "./Forecast";
import searchIcon from "../../img/dashboard/search glass.svg";

import Place from "./Place";
import { useDispatch } from "react-redux";
import { loadWeatherData, loadCityLanLot } from "../../store/weatherdata";
const Weather = () => {
  const dispatch = useDispatch();
  const getWeatherDataHandler = () => {
    // dispatch(loadWeatherData("37.8267,-122.4233"));
    dispatch(loadCityLanLot("kuril,BD"));
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-bgpurple">
      <div className="flex flex-col justify-center items-center h-4/5 w-30p bg-bluishBlack rounded-l-xl">
        <CurrentWeather />
        <DressSuggestion />
      </div>

      <div className="flex flex-col justify-center h-4/5 w-60p bg-bluishWhite rounded-r-xl px-8">
        <div className="flex flex-col gap-6 justify-center items-start">
          <div className="flex gap-2">
            <div className="flex justify-center items-center bg-white rounded pl-2">
              <img
                onClick={getWeatherDataHandler}
                className="h-6 cursor-pointer"
                src={searchIcon}
                alt=""
              />
              <input
                className="h-8 pl-2 rounded outline-none text-black font-goth placeholder-gray-600 focus:border-bgpurple duration-150"
                type="text"
              />
            </div>
            <SelectButton
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
          <div className="flex">
            <Place />
          </div>
          <Forecast />
        </div>
      </div>
    </div>
  );
};

export default Weather;
