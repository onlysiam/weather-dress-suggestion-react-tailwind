const AuthButton = ({ body, image, px, py, w, h, mr, font }) => {
  w = w ? w + " " : " ";
  h = h ? h + " " : "h-11 ";
  px = px ? px + " " : "px-3 ";
  py = py ? py + " " : "py-3 ";
  mr = mr ? mr + " " : "mr-8 ";
  font = font ? font + " " : " ";
  return (
    <button
      className={
        px +
        py +
        w +
        h +
        mr +
        font +
        "flex overflow-hidden bg-red-500 cursor-pointer text-white font-bold rounded outline-none hover:bg-bgpurple duration-500 "
      }
    >
      {image ? <img className="h-6 pr-2" src={image} alt="" /> : ""}
      {body}
    </button>
  );
};

export default AuthButton;
