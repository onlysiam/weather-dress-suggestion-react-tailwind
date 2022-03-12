const Hamburgermenu = ({ onClick, color }) => {
  color = color ? color + " " : "bg-white ";
  return (
    <div onClick={() => onClick()} className="space-y-2 w-10">
      <div className={color + "w-10 h-1 rounded-2xl"}></div>
      <div className={color + "w-10 h-1 rounded-2xl"}></div>
      <div className={color + "w-10 h-1 rounded-2xl"}></div>
    </div>
  );
};

export default Hamburgermenu;
