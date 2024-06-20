import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import isDarkSlice from "./isDarkSlice";

const store = configureStore({
  reducer: {
    authSlice,
    isDarkSlice,
  },
});

export default store;
