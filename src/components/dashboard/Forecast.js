import { Button } from "../formComponents/FormComponents";
const Forecast = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Button body="Week" bg="bg-transparent" text="text-black" hoverBg=" " />
        <Button
          body="Month"
          bg="bg-transparent"
          text="text-black"
          hoverBg=" "
        />
        <Button
          body="3 Month"
          bg="bg-transparent"
          text="text-black"
          hoverBg=" "
        />
      </div>
    </div>
  );
};

export default Forecast;
