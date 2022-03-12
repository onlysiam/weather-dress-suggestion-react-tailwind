import { useState } from "react";
//image
import altImg from "../../img/dashboard/alt.jpg";
//components
import { Button } from "../formComponents/FormComponents";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { authWindowToggleTrue } from "../../store/loaders/authWindow";
const Place = () => {
  const dispatch = useDispatch();
  const currently = useSelector(
    (state) => state.entities.weatherData.currently
  );
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );

  const [saveButton, setSaveButton] = useState(false);
  //handlers
  const placeSaveHandler = () => {
    if (!authenticated) {
      dispatch(authWindowToggleTrue());
    }
  };
  return (
    <div
      onMouseOver={() => setSaveButton(true)}
      onMouseLeave={() => setSaveButton(false)}
      className="relative flex flex-col justify-center items-center gap-1 h-full w-36 rounded"
    >
      {saveButton ? (
        <div className="absolute top-0 right-0">
          <Button
            onClick={placeSaveHandler}
            body="save"
            bg="bg-black bg-opacity-30"
            padding="px-2 py-0"
            margin="mx-0"
            border="rounded rounded-tr-xl"
            dimensions="h-8"
            text="text-sm text-white"
            font="font-semibold"
          />
        </div>
      ) : (
        <span class="absolute flex justify-center items-center h-5 w-5 overflow-visible top-1 right-1">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
        </span>
      )}
      <img
        className="w-full h-36 rounded-xl object-cover overflow-hidden"
        src={currently.cityImage ? currently.cityImage : altImg}
        alt=""
      />
      <h1 className="text-sm font-semibold text-black font-ubuntu overflow-hidden">
        {currently.place}
      </h1>
    </div>
  );
};

export default Place;
