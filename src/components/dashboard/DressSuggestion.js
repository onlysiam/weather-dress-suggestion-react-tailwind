import Card from "./Card";
//images
import acc from "../../img/dashboard/SUNGLASS.png";
import top from "../../img/dashboard/T-SHIRT.png";
import bottom from "../../img/dashboard/TROUSER.png";
import shoe from "../../img/dashboard/SNEAKER.png";
const DressSuggestion = () => {
  return (
    <div className="relative flex flex-col justify-center items-star mt-4 px-4 py-4 z-10">
      <div className="absolute h-full w-full bg-gray-600 opacity-80 flex justify-center items-center top-0 left-0 z-20">
        <h1 className="text-xl text-white font-goth">Not Available</h1>
      </div>
      <h1 className="text-xl text-white font-goth overflow-hidden">
        Dress Suggestion:
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-6 mt-4 overflow-hidden">
        <Card type="Accessories" image={acc} bg="bg-skyblue" />
        <Card type="Top" image={top} bg="bg-navPurpleCompliment" />
        <Card type="Bottom" image={bottom} bg="bg-skyBlueCompliment" />
        <Card type="Shoes" image={shoe} bg="bg-navPurple" />
      </div>
    </div>
  );
};

export default DressSuggestion;
