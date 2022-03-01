const Button = ({
  body,
  image,
  px,
  py,
  w,
  h,
  mr,
  bg,
  font,
  hoverText,
  hoverBg,
  onClick,
}) => {
  w = w ? w + " " : " ";
  h = h ? h + " " : "h-11 ";
  px = px ? px + " " : "px-3 ";
  py = py ? py + " " : "py-3 ";
  mr = mr ? mr + " " : "mr-8 ";
  bg = bg ? bg + " " : "bg-btnPurple ";
  font = font ? font + " " : " ";
  hoverText = hoverText ? hoverText + " " : "hover:text-btnPurple ";
  hoverBg = hoverBg ? hoverBg + " " : "hover:bg-white ";

  return (
    <button
      onClick={(e) => onClick(e)}
      className={
        px +
        py +
        w +
        h +
        mr +
        font +
        bg +
        hoverText +
        hoverBg +
        "flex overflow-hidden cursor-pointer text-white font-bold rounded outline-none duration-500 "
      }
    >
      {image ? <img className="h-6 pr-2" src={image} alt="" /> : ""}
      {body}
    </button>
  );
};

export default Button;
