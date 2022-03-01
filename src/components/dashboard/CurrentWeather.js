import cloud from "../../img/landingpage/cloudwithrain.svg";
const CurrentWeather = () => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <div className="flex justify-center gap-2 items-center">
        <img className="h-10" src={cloud} alt="" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white font-goth">Today</h1>
          <p className=" text-md text-gray-300">Fri, 3 Mar</p>
        </div>
      </div>
      <div className="flex">
        <h1 className="text-8xl text-white font-goth">28</h1>
        <p className=" text-xl text-white">C</p>
      </div>
      <p className=" text-md text-gray-300">Dhaka, Bangladesh</p>
      <div className="flex gap-5">
        <p className=" text-md text-gray-300">Feels Like 30</p>
        <p className=" text-md text-gray-300">.</p>
        <p className=" text-md text-gray-300">Sunset 6:00</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
