import { combineReducers } from "redux";
import usersReducer from "./users";
import authReducer from "./auth";

const appReducer = combineReducers({
  users: usersReducer,
  userAuthentication: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "users/userLogout") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
