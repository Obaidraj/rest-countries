import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../features/darkModeSlice";
import countrySlice from "../features/countrySlice";
export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    countries: countrySlice,
  },
});
