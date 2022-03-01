//components
import Button from "../buttons/Button";
//images
import bg from "../../img/background pictures/citysearchBg.svg";
import locationImg from "../../img/citysearch page/location.svg";
import arrow from "../../img/citysearch page/arrow.svg";
import SelectButton from "../buttons/SelectButton";
const Citysearch = () => {
  return (
    <div className="flex flex-col justify-evenly items-start w-screen px-60">
      <div className="">
        <img className="fixed top-0 left-0 w-screen z-10" src={bg} alt="" />
      </div>
      <div className="flex flex-col justify-evenly items-start w-2/3">
        <h1 className="text-white text-5xl font-extrabold font-ubuntu overflow-hidden z-20">
          Where Are You Headed Today?
        </h1>
        <div className="flex justify-center items-start z-20 mt-20">
          <Button body="Current Location" image={locationImg} />
          <SelectButton body="Country" />
        </div>
        <div className="flex mt-5 gap-3 w-full justify-bwtween items-start z-20">
          <input
            className="basis-11/12 border-2 h-11 border-purple-600 outline-none px-4 text-white rounded bg-inputPurple focus:border-bgpurple duration-150"
            type="text"
            placeholder="City/Place"
          />
          <Button mr="mr-0" body="Search" />
        </div>
      </div>
    </div>
  );
};

export default Citysearch;
