const Aboutdetails = ({ image, body, flex }) => {
  flex = flex ? flex + " " : "";
  return (
    <div className={flex + "flex w-full items-center py-4"}>
      <div className="w-1/6">
        <img className="h-20" src={image} alt="" />
      </div>
      <div className="w-full">
        <h1 className="font-ubuntu text-base 2xl:text-lg font-medium pl-4">
          {body}
        </h1>
      </div>
    </div>
  );
};

export default Aboutdetails;
