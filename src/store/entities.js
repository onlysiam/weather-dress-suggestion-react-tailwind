import { combineReducers } from "redux";
import usersReducer from "./users";
import authReducer from "./auth";
import weatherdataReducer from "./weatherdata";
import codesReducer from "./countrycodes";
import citySuggestionsReducer from "./citysuggestions";

const appReducer = combineReducers({
  users: usersReducer,
  userAuthentication: authReducer,
  weatherData: weatherdataReducer,
  citySuggestions: citySuggestionsReducer,
  countryCodes: codesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "users/userLogout") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
