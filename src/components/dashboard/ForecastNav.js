//components
import { Button } from "../formComponents/FormComponents";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  forecastHourlyToggleTrue,
  forecastWeeklyToggleTrue,
  forecastMonthlyToggleTrue,
} from "../../store/loaders/forecastwindows";
const ForecastNav = () => {
  const dispatch = useDispatch();
  const forecastWindow = useSelector((state) => state.loader.forecastWindow);
  //handlers
  const hourlyHandler = () => {
    if (!forecastWindow.hourly) dispatch(forecastHourlyToggleTrue());
  };
  const weeklyHandler = () => {
    if (!forecastWindow.weekly) dispatch(forecastWeeklyToggleTrue());
  };
  const monthlyHandler = () => {
    if (!forecastWindow.monthly) dispatch(forecastMonthlyToggleTrue());
  };
  return (
    <div className="flex gap-2">
      <Button
        onClick={hourlyHandler}
        body="48 Hours"
        bg="bg-transparent"
        text={forecastWindow.hourly ? "btext-black" : "text-gray-400"}
        hoverBg=" "
        font="font-ubuntu"
        active={forecastWindow.hourly ? "border-b-2 border-b-primary" : ""}
      />
      <Button
        onClick={weeklyHandler}
        body="Week"
        bg="bg-transparent"
        text={forecastWindow.weekly ? "btext-black" : "text-gray-400"}
        hoverBg=" "
        font="font-ubuntu"
        active={forecastWindow.weekly ? "border-b-2 border-b-primary" : ""}
      />
      <Button
        onClick={monthlyHandler}
        body="Month"
        bg="bg-transparent"
        text={forecastWindow.monthly ? "btext-black" : "text-gray-400"}
        hoverBg=" "
        font="font-ubuntu"
        active={forecastWindow.monthly ? "border-b-2 border-b-primary" : ""}
      />
    </div>
  );
};

export default ForecastNav;
