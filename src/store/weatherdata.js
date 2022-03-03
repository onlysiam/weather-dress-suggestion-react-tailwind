import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { weatehrDataUrl } from "./urls";
import {
  unixToDatetime,
  todaysDate,
  unixToWeekday,
  farenheitToCelcius,
} from "./functions";

const slice = createSlice({
  name: "weather data",
  initialState: {
    currently: {
      lat: "",
      lon: "",
      date: "",
      city: "",
      cityImage: "",
      temperature: "",
      feelsLike: "",
      sunset: "",
      icon: "",
    },
    hourly: [],
    weekly: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    dataRequested: (data, action) => {
      data.loading = true;
    },
    dataAdded: (data, action) => {
      data.currently.lat = action.payload.openweatherData.coord.lat;
      data.currently.lon = action.payload.openweatherData.coord.lon;
      data.currently.date = todaysDate();
      data.currently.city =
        action.payload.openweatherData.name +
        ", " +
        action.payload.openweatherData.sys.country;
      data.currently.cityImage = action.payload.placeImage[0].webformatURL;
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
        data.hourly.push({
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
        data.weekly.push({
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

      data.loading = false;
    },

    dataRequestFailed: (data, action) => {
      data.loading = false;
    },
  },
});

export const { dataAdded, dataRequested, dataRequestFailed } = slice.actions;
export default slice.reducer;

export const loadWeatherData = (latlon) =>
  apiCallBegan({
    url: weatehrDataUrl + "/" + latlon,
    method: "get",
    onStart: dataRequested.type,
    onSuccess: dataAdded.type,
    onError: dataRequestFailed.type,
  });
