import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "signup",
  initialState: false,
  reducers: {
    signupWindowToggle: (togglesignupWindow, action) => {
      togglesignupWindow = !togglesignupWindow;
    },
    signupWindowToggleTrue: (togglesignupWindow, action) => {
      togglesignupWindow = true;
    },
    signupWindowToggleFalse: (togglesignupWindow, action) => {
      togglesignupWindow = false;
    },
  },
});

export const {
  signupWindowToggle,
  signupWindowToggleTrue,
  signupWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
