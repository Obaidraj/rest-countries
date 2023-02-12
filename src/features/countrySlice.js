import { createSlice } from "@reduxjs/toolkit";
import Data from "../app/data.json";
const initialState = {
  countries: Data,
};
export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filteredList: (state, action) => {
      state.countries = action.payload;
    },
  },
});
export const { filteredList } = countriesSlice.actions;
export const countries = (state) => state.countries.countries;
export default countriesSlice.reducer;
