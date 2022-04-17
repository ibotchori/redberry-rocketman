import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covid/covidSlice";
import personalInfoReducer from "../features/personalinfo/personalInfoSlice";
import redberrianReducer from "../features/redberrian/redberrianSlice";
import skillReducer from "../features/skill/skillSlice";

export const store = configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
    skill: skillReducer,
    covid: covidReducer,
    redberrian: redberrianReducer,
  },
});
