const Input = ({ image, basis, pl, mr, textSize, type, placeholder }) => {
  basis = basis ? basis + " " : "";
  pl = pl ? pl + " " : "pl-0 ";
  mr = mr ? mr + " " : "mr-0 ";
  textSize = textSize ? textSize + " " : "text-md ";
  type = type ? type : "text";

  return (
    <div className="relative flex">
      {image ? <img className="absolute h-5 left-0" src={image} alt="" /> : ""}
      <input
        className={
          basis +
          pl +
          mr +
          textSize +
          "border-b-2 rounded-sm border-gray-600 h-7 outline-none bg-transparent text-black font-goth placeholder-gray-600 focus:border-bgpurple duration-150"
        }
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
