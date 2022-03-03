export const Button = ({
  body,
  image,
  px,
  py,
  w,
  h,
  mr,
  mt,
  bg,
  font,
  fontWeight,
  text,
  textSize,
  rounded,
  hoverText,
  hoverBg,
  onClick,
  active,
}) => {
  w = w ? w + " " : " ";
  h = h ? h + " " : "h-11 ";
  px = px ? px + " " : "px-3 ";
  py = py ? py + " " : "py-3 ";
  mr = mr ? mr + " " : "mr-8 ";
  mt = mt ? mt + " " : "";
  bg = bg ? bg + " " : "bg-primary ";
  font = font ? font + " " : " ";
  fontWeight = fontWeight ? fontWeight + " " : "font-bold ";
  rounded = rounded ? rounded + " " : "rounded ";
  text = text ? text + " " : "text-white ";
  textSize = textSize ? textSize + " " : " ";
  hoverText = hoverText ? hoverText + " " : "hover:text-primary ";
  hoverBg = hoverBg ? hoverBg + " " : "hover:bg-white ";
  active = active ? active + " " : "";

  return (
    <button
      onClick={(e) => onClick(e)}
      className={
        px +
        py +
        w +
        h +
        mr +
        mt +
        font +
        fontWeight +
        bg +
        hoverText +
        hoverBg +
        text +
        textSize +
        active +
        rounded +
        "flex justify-center items-center overflow-hidden cursor-pointer outline-none duration-500"
      }
    >
      {image ? <img className="h-6 pr-2" src={image} alt="" /> : ""}
      {body}
    </button>
  );
};

export const SelectButton = ({
  value,
  onChange,
  bg,
  text,
  px,
  py,
  w,
  h,
  mr,
  hoverText,
  hoverBg,
}) => {
  bg = bg ? bg + " " : "bg-primary ";
  text = text ? text + " " : "text-white ";
  w = w ? w + " " : " ";
  h = h ? h + " " : "h-11 ";
  px = px ? px + " " : "px-3 ";
  py = py ? py + " " : "py-3 ";
  mr = mr ? mr + " " : "mr-8 ";
  hoverText = hoverText ? hoverText + " " : "hover:text-primary ";
  hoverBg = hoverBg ? hoverBg + " " : "hover:bg-white ";
  return (
    <select
      onChange={(e) => onChange(e)}
      value={value}
      className={
        bg +
        text +
        px +
        py +
        w +
        h +
        mr +
        hoverText +
        hoverBg +
        "flex overflow-hidden cursor-pointer font-bold rounded duration-500 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
      }
      aria-label="Default select example"
    >
      <option value="BD">Bangladesh</option>
      <option value="IND">India</option>
      <option value="US">USA</option>
      <option value="UK">UK</option>
    </select>
  );
};

export const CheckedInput = ({ body }) => {
  return (
    <div className="flex justify-start items-center ">
      <input
        className="appearance-none h-4 w-4 bg-white rounded outline-none checked:bg-primary checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
      />
      <p className="font-ubuntu text-lg text-gray-700 font-medium ml-2">
        {body}
      </p>
    </div>
  );
};

export const Input = ({
  image,
  basis,
  pl,
  mr,
  textSize,
  type,
  placeholder,
  bg,
  px,
  py,
  w,
  h,
}) => {
  basis = basis ? basis + " " : "";
  pl = pl ? pl + " " : "pl-0 ";
  mr = mr ? mr + " " : "mr-0 ";
  bg = bg ? bg + " " : "bg-transparent ";
  textSize = textSize ? textSize + " " : "text-md ";
  type = type ? type : "text";
  px = px ? px + " " : "px-0 ";
  py = py ? py + " " : "py-0 ";
  w = w ? w + " " : " ";
  h = h ? h + " " : " ";

  return (
    <div className="relative flex">
      {image ? <img className="absolute h-5 left-0" src={image} alt="" /> : ""}
      <input
        className={
          basis +
          pl +
          mr +
          textSize +
          bg +
          px +
          py +
          w +
          h +
          "border-b-2 rounded-sm border-gray-600 outline-none text-black font-goth placeholder-gray-600 focus:border-primary duration-150"
        }
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
