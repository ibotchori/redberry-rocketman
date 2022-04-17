import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import skillService from "./skillService";

export const fetchSkills = createAsyncThunk(
  "skills/fetchSkills", // <-- action name
  async function (_, { rejectWithValue }) {
    try {
      // API call from skillService file
      return await skillService.fetchSkills();
    } catch (error) {
      // pass error message to fetchSkills.reject (action.payload)
      return rejectWithValue(error.message);
    }
  }
);

// use if API didn't response
const dummySkills = [
  { id: 1, title: "HTML" },
  { id: 2, title: "CSS" },
  { id: 3, title: "PHP" },
  { id: 4, title: "Laravel" },
  { id: 5, title: "React.JS" },
  { id: 6, title: "Vue.JS" },
  { id: 7, title: "Svelte" },
  { id: 8, title: "Angular" },
];

const initialState = {
  addedSkills: [],
  fetchedSkills: [],
  status: null,
  error: null,
};

export const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.addedSkills.push({
        id: action.payload.selectedSkillID,
        experience: action.payload.expYear,
        title: action.payload.selectedSkill,
      });
    },
    removeSkill: (state, action) => {
      state.addedSkills = state.skills.filter(
        (skill) => skill.id != action.payload.itemId
      );
    },
  },
  extraReducers: {
    [fetchSkills.pending]: (state) => {
      state.status = "pending";
      state.error = null;
    },
    [fetchSkills.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.fetchedSkills = action.payload;
      state.error = null;
    },
    [fetchSkills.rejected]: (state, action) => {
      state.status = "rejected";
      state.fetchedSkills = dummySkills;
      // set value to error from rejectWithValue parameter
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSkill, removeSkill } = skillSlice.actions;

export default skillSlice.reducer;
