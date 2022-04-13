import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./personalInfoSlice";
import skillReducer from "./skillSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    skill: skillReducer,
  },
});
