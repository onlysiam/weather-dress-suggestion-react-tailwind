import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "authAlert",
  initialState: {
    type: "",
    state: false,
  },
  reducers: {
    authAlertToggleTrue: (authAlert, action) => {
      if (action.payload) authAlert.type = action.payload;
      authAlert.state = true;
    },
    authAlertToggleFalse: (authAlert, action) => {
      if (action.payload) authAlert.type = action.payload;
      authAlert.state = false;
    },
  },
});

export const { authAlertToggleTrue, authAlertToggleFalse } = slice.actions;
export default slice.reducer;
