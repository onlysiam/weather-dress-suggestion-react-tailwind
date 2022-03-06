import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { countryCodesUrl } from "./urls";

const slice = createSlice({
  name: "countryCodes",
  initialState: {
    data: [],
  },
  reducers: {
    codesRequested: (codes, action) => {},
    codesAdded: (codes, action) => {
      codes.data = action.payload.countrycodes;
    },
    codesRequestFailed: (codes, action) => {
      codes.data = action.payload;
    },
  },
});

export const { codesRequested, codesAdded, codesRequestFailed } = slice.actions;
export default slice.reducer;

export const loadCountryCodes = () =>
  apiCallBegan({
    url: countryCodesUrl,
    method: "get",
    onStart: codesRequested.type,
    onSuccess: codesAdded.type,
    onError: codesRequestFailed.type,
  });
