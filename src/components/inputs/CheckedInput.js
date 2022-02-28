const CheckedInput = ({ body }) => {
  return (
    <div className="flex justify-start items-center ">
      <input
        className="appearance-none h-4 w-4 bg-white rounded outline-none checked:bg-bgpurple checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
      />
      <p className="font-ubuntu text-lg text-gray-700 font-medium ml-2">
        {body}
      </p>
    </div>
  );
};

export default CheckedInput;
