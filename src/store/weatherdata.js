import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { weatehrDataUrl, lanLotUrl } from "./urls";

const slice = createSlice({
  name: "weather data",
  initialState: {
    list: {
      lanLot: [],
      weatherdata: [],
    },
    loading: false,
    lastFetch: null,
  },
  reducers: {
    dataRequested: (data, action) => {
      data.loading = true;
    },
    lanLotAdded: (data, action) => {
      data.list.lanLot.push(action.payload.coord);
      data.loading = true;
    },
    dataAdded: (data, action) => {
      data.list.weatherdata.push(action.payload);
      data.loading = true;
    },

    dataRequestFailed: (data, action) => {
      data.loading = false;
    },
  },
});

export const { dataAdded, lanLotAdded, dataRequested, dataRequestFailed } =
  slice.actions;
export default slice.reducer;

export const loadWeatherData = (latlon) =>
  apiCallBegan({
    url: weatehrDataUrl + "/" + latlon,
    method: "get",
    onStart: dataRequested.type,
    onSuccess: dataAdded.type,
    onError: dataRequestFailed.type,
  });

export const loadCityLanLot = (city) =>
  apiCallBegan({
    url: lanLotUrl + "/" + city,
    method: "get",
    onStart: dataRequested.type,
    onSuccess: lanLotAdded.type,
    onError: dataRequestFailed.type,
  });
