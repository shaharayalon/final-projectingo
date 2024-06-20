import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userData = action.payload;
      
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.userData = undefined;
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
