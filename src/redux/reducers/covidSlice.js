import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  work_preference: "",
  had_covid: false,
  had_covid_at: "",
  vaccinated: false,
  vaccinated_at: "",
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setWorkPreference: (state, action) => {
      state.work_preference = action.payload;
    },
    setCovid: (state, action) => {
      state.had_covid = action.payload;
    },
    setCovidAt: (state, action) => {
      state.had_covid_at = action.payload;
    },
    setVaccinated: (state, action) => {
      state.vaccinated = action.payload;
    },
    setVaccinatedAt: (state, action) => {
      state.vaccinated_at = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setWorkPreference,
  setCovid,
  setCovidAt,
  setVaccinated,
  setVaccinatedAt,
} = covidSlice.actions;

export default covidSlice.reducer;
