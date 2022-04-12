import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    enteredName: (state, action) => {
      state.firstName = action.payload;
    },
    enteredLastName: (state, action) => {
      state.lastName = action.payload;
    },
    enteredEmail: (state, action) => {
      state.email = action.payload;
    },
    enteredPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { enteredName, enteredLastName, enteredEmail, enteredPhone } =
  personalInfoSlice.actions;

export default personalInfoSlice.reducer;
