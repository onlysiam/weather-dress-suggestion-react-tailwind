const Place = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-40 w-32 cursor-pointer">
      <img
        className="w-full h-full rounded-xl object-cover"
        src="https://cdn.pixabay.com/photo/2019/10/24/05/13/national-parliament-of-bangladesh-4573350_960_720.jpg"
        alt=""
      />
      <h1 className="text-md fon-bold text-black font-goth overflow-hidden">
        Dhaka
      </h1>
    </div>
  );
};

export default Place;
