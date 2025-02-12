import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  timeRange: "All time",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.timeRange = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
