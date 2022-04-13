import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covidSlice";
import personalInfoReducer from "./personalInfoSlice";
import skillReducer from "./skillSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    skill: skillReducer,
    covid: covidReducer,
  },
});
