import React from "react";
import Skycons, { SkyconsType } from "react-skycons";

const Icons = ({ type, size, color }) => {
  if (color === "inherit") {
    if (type === "CLEAR_DAY") color = "#e9cf4e";
    else if (type === "CLEAR_NIGHT") color = "#3b3b3b";
    else color = "#057ccc";
  }
  return (
    <Skycons
      color={color}
      type={type}
      animate={true}
      size={parseInt(size)}
      resizeClear={true}
    />
  );
};

export default Icons;
