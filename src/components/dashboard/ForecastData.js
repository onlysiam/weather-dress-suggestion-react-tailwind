//components

import Forecastelements from "./Forecastelements";
//redux
import { useSelector } from "react-redux";

const ForecastData = () => {
  const hourly = useSelector((state) => state.entities.weatherData.hourly);
  const weekly = useSelector((state) => state.entities.weatherData.weekly);
  const forecastWindow = useSelector((state) => state.loader.forecastWindow);
  return (
    <div className="w-full flex flex-col justify-center gap-4 ">
      {forecastWindow.hourly ? (
        <div className="flex h-1/5 w-85p flex-wrap overflow-hidden">
          {hourly &&
            hourly.map((hour, index) => (
              <Forecastelements data={hour} key={index} />
            ))}
        </div>
      ) : (
        ""
      )}
      {forecastWindow.weekly ? (
        <div className="flex flex-col w-85p">
          {weekly &&
            weekly.map((day, index) => (
              <Forecastelements data={day} key={index} />
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForecastData;
