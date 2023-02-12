import { createSlice } from "@reduxjs/toolkit";
import { setDarkMode } from "../utils/common";
const initialState = {
  mode: "",
};
export const drakModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeColorMode: (state, action) => {
      state.mode = action.payload;
      setDarkMode(action.payload);
    },
  },
});
export const { changeColorMode } = drakModeSlice.actions;
export const colorMode = (state) => state.darkMode.mode;
export default drakModeSlice.reducer;
