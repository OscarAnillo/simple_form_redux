import { configureStore } from "@reduxjs/toolkit";

/* Reducer */
import formSlice from "./Features/form-slice";

export const store = configureStore({
  reducer: {
    formSlice,
  },
});
