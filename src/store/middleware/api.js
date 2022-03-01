import axios from "axios";
import { alertToggleTrue } from "../alerts/alert";
import { loadWeatherData } from "../weatherdata";
import * as actions from "../api";
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onSuccess, onError, onStart } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);
    try {
      const response = await axios.request({
        baseURL: "http://localhost:3001/api",
        // baseURL: "https://cgpa101.onlysiam.com/api",
        url,
        method,
        data,
      });
      if (response.data) dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess && response.data) {
        dispatch({ type: onSuccess, payload: response.data });
        if (onSuccess === "users/userAdded") {
          dispatch({ type: alertToggleTrue.type, payload: "success" });
        }
        if (onSuccess === "weather data/lanLotAdded") {
          const lanlot =
            response.data.coord.lat + "," + response.data.coord.lon;
          dispatch(loadWeatherData(lanlot));
        }
      }
      if (onSuccess && !response.data) {
        dispatch({ type: alertToggleTrue.type, payload: "error" });
        dispatch({ type: onError, payload: "no user" });
      }
    } catch (error) {
      dispatch(actions.apiCallFailed({ error }));
      if (onError) dispatch({ type: onError, payload: error });
    }
  };
export default api;
