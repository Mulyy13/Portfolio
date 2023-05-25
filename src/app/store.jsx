import { configureStore } from "@reduxjs/toolkit";
import handleReducer from "../features/handleSection";

export const store = configureStore({
  reducer: {
    handleSection: handleReducer,
  },
});
