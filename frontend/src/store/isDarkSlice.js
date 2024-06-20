import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const isDarkSlice = createSlice({
  name: "isDark",
  initialState,
  reducers: {
    changeToLight(state, action) {
      state.isDark = false;
    },
    changeToDark(state, action) {
      state.isDark = true;
    },
  },
});

export const isDarkActions = isDarkSlice.actions;
export default isDarkSlice.reducer;
