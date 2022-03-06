import rain from "../../img/dashboard/forecast/rain.svg";
import wind from "../../img/dashboard/forecast/wind.svg";
//functions
import { msToKmh } from "../../functions/functions";
//components
import Icons from "./Icons";
const Forecastelements = ({ data }) => {
  return (
    <div className="flex justify-start items-center w-full overflow-hidden">
      <h1 className="w-15p font-ubuntu">{data.time}</h1>
      <div className="flex gap-1 justify-center items-center w-15p">
        <img className="h-4 w-4" src={rain} alt="" />
        <h1 className="font-ubuntu w-8">{parseInt(data.rain * 100)}%</h1>
      </div>
      <div className="flex gap-1 justify-center items-center w-20p">
        <img className="h-4 w-8" src={wind} alt="" />
        <h1 className="font-ubuntu">
          {msToKmh(data.wind)}
          <span className="text-sm"> km/h</span>
        </h1>
      </div>
      <div className="flex justify-center items-center w-15p">
        <Icons type={data.icon} size="20" color="inherit" />
      </div>
      {data.maxTemp ? (
        <div className="flex justify-center items-center gap-2 w-2/5">
          <h1 className="font-ubuntu">{data.minTemp}&#176;C</h1>
          <div className="h-1 w-2/4 bg-gradient-to-r from-cyan-500 to-red-500 rounded-full"></div>
          <h1 className="font-ubuntu">{data.maxTemp}&#176;C</h1>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2 w-20p">
          <h1 className="font-ubuntu">{data.temp}&#176;C</h1>
        </div>
      )}
    </div>
  );
};

export default Forecastelements;
