const Button = ({ body, image, px, py, w, h, mr }) => {
  w = w ? w + " " : " ";
  h = h ? h + " " : "h-11 ";
  px = px ? px + " " : "px-3 ";
  py = py ? py + " " : "py-3 ";
  mr = mr ? mr + " " : "mr-8 ";
  return (
    <button
      className={
        px +
        py +
        w +
        h +
        mr +
        "flex overflow-hidden bg-btnPurple cursor-pointer text-white font-bold rounded outline-none hover:text-btnPurple hover:bg-white duration-500 "
      }
    >
      {image ? <img className="h-6 pr-2" src={image} alt="" /> : ""}
      {body}
    </button>
  );
};

export default Button;
