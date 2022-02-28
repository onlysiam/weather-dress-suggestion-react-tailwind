import { combineReducers } from "redux";
import loginWindowReducer from "./loginWindow";
import signupWindowReducer from "./signupWindow";
import preloaderReducer from "./preloader";

export default combineReducers({
  preloader: preloaderReducer,
  loginWindow: loginWindowReducer,
  signupWindow: signupWindowReducer,
});
