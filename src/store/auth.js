import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { authUrl, registerUrl } from "./urls";
import { userAdded } from "./user";
import { preloaderToggleFalse } from "./loaders/preloader";

const slice = createSlice({
  name: "authentication",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    alert: [{ type: "" }, { state: false }],
  },
  reducers: {
    authRequested: (authentication, action) => {
      authentication.loading = true;
    },
    authReceived: (authentication, action) => {
      authentication.loading = false;
      authentication.lastFetch = Date.now();
    },

    authRequestFailed: (authentication, action) => {
      authentication.loading = false;
    },
    sessionAdded: (authentication, action) => {
      authentication.list.push(action.payload);
      authentication.loading = false;
    },
    sesssioneRemoved: (authentication, action) => {
      return authentication.list.filter(
        (course) => course.course_id !== action.payload
      );
    },
    logout: (authentication, action) => {
      const index = authentication.list.findIndex(
        (course) => course.course_id === action.payload
      );
      if (index > 0)
        authentication.list[index].active = !authentication.list[index].active;
    },
  },
});

export const { authRequested, authRequestFailed, authReceived } = slice.actions;
export default slice.reducer;

//Action Creator

export const login = (username, password) =>
  apiCallBegan({
    url: authUrl + "/" + username + "/" + password,
    method: "get",
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: preloaderToggleFalse.type,
  });

export const register = (informations) =>
  apiCallBegan({
    url: registerUrl,
    method: "post",
    data: informations,
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });
