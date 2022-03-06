import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { citySuggestionUrl } from "./urls";

const slice = createSlice({
  name: "citySuggestions",
  initialState: {
    data: [],
  },
  reducers: {
    citySuggestionReset: (city, action) => {
      city.data = [];
    },
    citySuggestionAdded: (city, action) => {
      city.data = action.payload;
    },
  },
});

export const { citySuggestionReset, citySuggestionAdded } = slice.actions;
export default slice.reducer;

export const loadCitySuggestions = (search) =>
  apiCallBegan({
    url: citySuggestionUrl + "/" + search,
    method: "get",
    onSuccess: citySuggestionAdded.type,
  });
