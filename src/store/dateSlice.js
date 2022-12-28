import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: '',
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {
  setDate
} = dateSlice.actions;

export default dateSlice.reducer;