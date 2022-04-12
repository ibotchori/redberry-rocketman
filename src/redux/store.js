import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./personalInfoSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
  },
});
