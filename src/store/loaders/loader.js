import { combineReducers } from "redux";
import authWindowReducer from "./authWindow";
import loginWindowReducer from "./loginWindow";
import signupWindowReducer from "./signupWindow";
import forecastWindowReducer from "./forecastwindows";
import preloaderReducer from "./preloader";

export default combineReducers({
  preloader: preloaderReducer,
  authWindow: authWindowReducer,
  loginWindow: loginWindowReducer,
  signupWindow: signupWindowReducer,
  forecastWindow: forecastWindowReducer,
});
