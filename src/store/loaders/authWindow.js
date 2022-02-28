import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "auth",
  initialState: { state: false },
  reducers: {
    authWindowToggle: (toggleAuthWindow, action) => {
      toggleAuthWindow.state = !toggleAuthWindow.state;
    },
    authWindowToggleTrue: (toggleAuthWindow, action) => {
      toggleAuthWindow.state = true;
    },
    authWindowToggleFalse: (toggleAuthWindow, action) => {
      toggleAuthWindow.state = false;
    },
  },
});

export const { authWindowToggle, authWindowToggleTrue, authWindowToggleFalse } =
  slice.actions;
export default slice.reducer;
