import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "alert",
  initialState: {
    type: "",
    state: false,
  },
  reducers: {
    alertToggleTrue: (alert, action) => {
      if (action.payload) alert.type = action.payload;
      alert.state = true;
    },
    alertToggleFalse: (alert, action) => {
      if (action.payload) alert.type = action.payload;
      alert.state = false;
    },
  },
});

export const { alertToggleTrue, alertToggleFalse } = slice.actions;
export default slice.reducer;
