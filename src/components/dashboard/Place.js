//image
import altImg from "../../img/dashboard/alt.jpg";
//redux
import { useSelector } from "react-redux";
const Place = () => {
  const currently = useSelector(
    (state) => state.entities.weatherData.currently
  );
  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full w-36 cursor-pointer">
      <img
        className="w-full h-36 rounded-xl object-cover overflow-hidden"
        src={currently.cityImage ? currently.cityImage : altImg}
        alt=""
      />
      <h1 className="text-sm fon-bold text-black font-ubuntu overflow-hidden">
        {currently.city}
      </h1>
    </div>
  );
};

export default Place;
