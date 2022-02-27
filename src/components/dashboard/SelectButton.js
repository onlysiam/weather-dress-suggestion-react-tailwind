const SelectButton = () => {
  return (
    <select
      className="flex px-3 py-3 h-11 overflow-hidden bg-btnPurple cursor-pointer text-white font-bold rounded mr-8 hover:text-btnPurple hover:bg-white duration-500 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
    >
      <option selected value="BD">
        Bangladesh
      </option>
      <option value="IND">India</option>
      <option value="US">USA</option>
      <option value="UK">UK</option>
    </select>
  );
};

export default SelectButton;
