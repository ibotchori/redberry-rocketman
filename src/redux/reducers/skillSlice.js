import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
};

export const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      state.skills.push({
        id: action.payload.selectedSkillID,
        experience: action.payload.expYear,
        title: action.payload.selectedSkill,
      });
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter(
        (skill) => skill.id != action.payload.itemId
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSkill, removeSkill } = skillSlice.actions;

export default skillSlice.reducer;
