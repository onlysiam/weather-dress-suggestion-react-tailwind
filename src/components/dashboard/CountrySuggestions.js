import { useState } from "react";
//image
import searchIcon from "../../img/dashboard/search glass.svg";
const CountrySuggestions = ({
  state,
  textColor,
  setCountryName,
  setCountryCode,
  setCountrySuggestions,
}) => {
  const [textHover, setTextHover] = useState(false);
  textColor = textColor + " ";
  return (
    <div
      onClick={() => {
        setCountryName(state.countryName);
        setCountryCode(state.countryCode);
        setCountrySuggestions("");
      }}
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
        {state.countryName}
      </h1>
    </div>
  );
};

export default CountrySuggestions;
