import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { weatehrDataUrl } from "./urls";
import {
  unixToDatetime,
  todaysDate,
  unixToWeekday,
  farenheitToCelcius,
  searchedCountry,
} from "../functions/functions";

const slice = createSlice({
  name: "weatherData",
  initialState: {
    data: [],
    currently: {
      lat: "",
      lon: "",
      date: "",
      city: "",
      place: "",
      cityImage: "",
      temperature: "",
      feelsLike: "",
      sunset: "",
      icon: "",
    },
    hourly: [],
    weekly: [],
    loading: { state: false, status: "pre-fetch" },
    lastFetch: null,
    error: "",
  },
  reducers: {
    dataReset: (data, action) => {
      data.hourly = [];
      data.weekly = [];
    },
    dataRequested: (data, action) => {
      data.loading.state = true;
      data.loading.status = "pre-fetch";
    },
    dataAdded: (data, action) => {
      if (action.payload.type === "error") {
        data.error = action.payload;
      } else {
        data.data = action.payload;
        data.currently.lat = action.payload.openweatherData.coord.lat;
        data.currently.lon = action.payload.openweatherData.coord.lon;
        data.currently.date = todaysDate();
        data.currently.city =
          action.payload.cityInfo[0].name +
          ", " +
          searchedCountry(
            action.payload.cityInfo[0].country,
            action.payload.countrycodes.countrycodes
          )[0].countryName;
        data.currently.place = action.payload.cityInfo[0].name;
        data.currently.cityImage =
          action.payload.placeImage.length > 0
            ? action.payload.placeImage[0].webformatURL
            : "";
        data.currently.temperature = parseInt(
          action.payload.openweatherData.main.temp
        );
        data.currently.feelsLike = parseInt(
          action.payload.openweatherData.main.feels_like
        );
        data.currently.sunset = unixToDatetime(
          action.payload.openweatherData.sys.sunset
        );
        data.currently.icon = action.payload.darkskyData.currently.icon
          .replaceAll("-", "_")
          .toUpperCase();

        //hourly forecast
        action.payload.darkskyData.hourly.data.map((hour) => {
          return data.hourly.push({
            time: unixToDatetime(hour.time),
            summary: hour.summary,
            rain: hour.precipProbability,
            wind: hour.windSpeed,
            icon: hour.icon.replaceAll("-", "_").toUpperCase(),
            temp: parseInt(farenheitToCelcius(hour.temperature)),
          });
        });
        //weekly forecast
        action.payload.darkskyData.daily.data.map((daily) => {
          return data.weekly.push({
            time: unixToWeekday(daily.time),
            summary: daily.summary,
            moonphase: daily.moonPhase,
            rain: daily.precipProbability,
            wind: daily.windSpeed,
            icon: daily.icon.replaceAll("-", "_").toUpperCase(),
            maxTemp: parseInt(farenheitToCelcius(daily.temperatureMax)),
            minTemp: parseInt(farenheitToCelcius(daily.temperatureMin)),
          });
        });

        data.loading.state = false;
        data.loading.status = "post-fetch";
      }
    },

    dataRequestFailed: (data, action) => {
      data.loading.state = false;
      data.loading.status = "pre-fetch";
    },
    dataRequestLoadingToggle: (data, action) => {
      data.loading.state = false;
      data.loading.status = "pre-fetch";
      data.error = "";
    },
  },
});

export const {
  dataReset,
  dataAdded,
  dataRequested,
  dataRequestFailed,
  dataRequestLoadingToggle,
} = slice.actions;
export default slice.reducer;

export const loadWeatherData = (type, city, country) =>
  apiCallBegan({
    url: weatehrDataUrl + "/" + type + "/" + city + "/" + country,
    method: "get",
    onStart: dataRequested.type,
    onSuccess: dataAdded.type,
    onError: dataRequestFailed.type,
  });
