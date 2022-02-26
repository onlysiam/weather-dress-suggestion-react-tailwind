const Aboutdetails = ({ image, body }) => {
  return (
    <div className="flex justify-evenly items-center px-4 py-4">
      <div className="w-1/6">
        <img src={image} alt="" />
      </div>
      <div className="w-3/5">
        <h1 className="font-ubuntu text-xl font-semibold pl-4">{body}</h1>
      </div>
    </div>
  );
};

export default Aboutdetails;
