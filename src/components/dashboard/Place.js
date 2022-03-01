const Place = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-40 w-32 cursor-pointer">
      <img
        className="w-full h-full rounded-xl object-cover"
        src="https://pixabay.com/get/gd85aaeccd1ee80edb3ed18ebcd26fe2bad8b3eb0098bef1b93d4cec0c883fc9f787900e832fb85fa60765a98fb208af67fb1d07185bcd7f12518271a70e4a37b_640.jpg"
        alt=""
      />
      <h1 className="text-md fon-bold text-black font-goth overflow-hidden">
        Dhaka
      </h1>
    </div>
  );
};

export default Place;
