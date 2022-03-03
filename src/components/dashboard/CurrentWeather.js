//redux
import { useSelector } from "react-redux";
//images
import cloud from "../../img/landingpage/cloudwithrain.svg";
//components
import Icons from "./Icons";

const CurrentWeather = () => {
  const data = useSelector((state) => state.entities.weatherData.currently);
  return (
    <div className="relative flex flex-col justify-center gap-4 items-center">
      <div className="flex justify-center gap-2 items-center  overflow-hidden">
        <div className="absolute left-0 ">
          <Icons type={data.icon} size="80" color="white" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white font-goth">Today</h1>
          <p className=" text-md text-gray-300 overflow-hidden">{data.date}</p>
        </div>
      </div>
      <div className="relative flex justify-center items-start w-full">
        <h1 className="text-8xl text-white font-goth overflow-hidden">
          {data.temperature}
        </h1>
        <p className="absolute right-12 text-3xl text-white overflow-hidden">
          &#176;c
        </p>
      </div>
      <p className=" text-md text-gray-300 overflow-hidden">{data.city}</p>
      <div className="flex gap-5">
        <p className=" text-md text-gray-300 overflow-hidden">
          Feels Like {data.feelsLike}
        </p>
        <p className=" text-md text-gray-300 overflow-hidden">.</p>
        <p className=" text-md text-gray-300 overflow-hidden">
          Sunset {data.sunset}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
