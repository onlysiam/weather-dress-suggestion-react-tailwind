import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "forecast",
  initialState: { state: false, hourly: false, weekly: true, monthly: false },
  reducers: {
    forecastWindowToggle: (toggleforecastindow, action) => {
      toggleforecastindow.state = !toggleforecastindow.state;
    },
    forecastHourlyToggle: (toggleforecastHourly, action) => {
      toggleforecastHourly.hourly = !toggleforecastHourly.hourly;
    },
    forecastHourlyToggleTrue: (toggleforecastHourly, action) => {
      toggleforecastHourly.monthly = false;
      toggleforecastHourly.weekly = false;
      toggleforecastHourly.hourly = true;
    },
    forecastHourlyToggleFalse: (toggleforecastHourly, action) => {
      toggleforecastHourly.hourly = false;
    },
    forecastWeeklyToggle: (toggleforecastWeekly, action) => {
      toggleforecastWeekly.weekly = !toggleforecastWeekly.weekly;
    },
    forecastWeeklyToggleTrue: (toggleforecastWeekly, action) => {
      toggleforecastWeekly.monthly = false;
      toggleforecastWeekly.weekly = true;
      toggleforecastWeekly.hourly = false;
    },
    forecastWeeklyToggleFalse: (toggleforecastWeekly, action) => {
      toggleforecastWeekly.weekly = false;
    },
    forecastMonthlyToggle: (toggleforecastMonthly, action) => {
      toggleforecastMonthly.monthly = !toggleforecastMonthly.monthly;
    },
    forecastMonthlyToggleTrue: (toggleforecastMonthly, action) => {
      toggleforecastMonthly.weekly = false;
      toggleforecastMonthly.hourly = false;
      toggleforecastMonthly.monthly = true;
    },
    forecastMonthlyToggleFalse: (toggleforecastMonthly, action) => {
      toggleforecastMonthly.monthly = false;
    },
  },
});

export const {
  forecastWindowToggle,
  forecastHourlyToggleTrue,
  forecastWeeklyToggleTrue,
  forecastMonthlyToggleTrue,
} = slice.actions;
export default slice.reducer;
