import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    loginWindowToggle: (toggleLoginWindow, action) => {
      toggleLoginWindow = !toggleLoginWindow;
    },
    loginWindowToggleTrue: (toggleLoginWindow, action) => {
      toggleLoginWindow = true;
    },
    loginWindowToggleFalse: (toggleLoginWindow, action) => {
      toggleLoginWindow = false;
    },
  },
});

export const {
  loginWindowToggle,
  loginWindowToggleTrue,
  loginWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
