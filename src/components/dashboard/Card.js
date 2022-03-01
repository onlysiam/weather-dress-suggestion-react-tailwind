const Card = ({ type, image, bg }) => {
  bg = bg + " ";
  return (
    <div
      className={
        bg +
        "flex justify-center items-center gap-2 w-44 h-20 opacity-80 rounded-lg px-1"
      }
    >
      <img className="h-16" src={image} alt="" />
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-white text-lg">{type}</h1>
        <p className="text-white text-xs">A {type} made with something.</p>
      </div>
    </div>
  );
};

export default Card;
