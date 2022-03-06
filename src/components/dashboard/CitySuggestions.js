import { useState } from "react";
//image
import searchIcon from "../../img/dashboard/search glass.svg";
//redux
import { useDispatch } from "react-redux";
//reducers
import { citySuggestionReset } from "../../store/citysuggestions";
const CitySuggestions = ({
  state,
  textColor,
  setCityName,
  setCountryName,
  setCountryCode,
  setCountrySuggestions,
}) => {
  const dispatch = useDispatch();
  const [textHover, setTextHover] = useState(false);
  const suggestionClickHandler = () => {
    console.log("hey");
    setCityName(state.cityName);
    setCountryName(state.countryName);
    setCountryCode(state.countryCode);
    setCountrySuggestions("");
    dispatch(citySuggestionReset());
  };
  textColor = textColor + " ";
  return (
    <div
      onClick={suggestionClickHandler}
      className="flex justify-start items-center w-full rounded px-1 cursor-pointer hover:bg-secondary duration-100"
    >
      <img className="h-3 cursor-pointer px-1" src={searchIcon} alt="" />
      <h1
        onMouseOver={() => setTextHover(true)}
        onMouseLeave={() => setTextHover(false)}
        className={
          textHover
            ? textColor + "w-full py-1 duration-150"
            : textColor + "w-full truncate py-1 duration-150"
        }
      >
        {state.cityName}, {state.countryName}
      </h1>
    </div>
  );
};

export default CitySuggestions;
