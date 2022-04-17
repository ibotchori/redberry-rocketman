import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  will_organize_devtalk: "undefined",
  devtalk_topic: "",
  something_special: "",
};

export const redberrianSlice = createSlice({
  name: "redberrian",
  initialState,
  reducers: {
    setDevTalk: (state, action) => {
      state.will_organize_devtalk = action.payload;
    },
    setDevTalkTopic: (state, action) => {
      state.devtalk_topic = action.payload;
    },
    setSomethingSpecial: (state, action) => {
      state.something_special = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDevTalk, setDevTalkTopic, setSomethingSpecial } =
  redberrianSlice.actions;

export default redberrianSlice.reducer;
