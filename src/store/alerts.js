import { combineReducers } from "redux";
import authAlertsReducer from "./authAlerts";

export default combineReducers({
  authAlert: authAlertsReducer,
});
