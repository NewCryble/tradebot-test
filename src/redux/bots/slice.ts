import { createSlice } from "@reduxjs/toolkit";
import { TBot } from "./types";

interface IBotsState {
  bots: TBot[];
}

const initialState: IBotsState = {
  bots: [],
};

const botsSlice = createSlice({
  name: "bots",
  initialState,
  reducers: {
    setBots: (state, action) => {
      state.bots = action.payload;
    },
  },
});

export const { setBots } = botsSlice.actions;
export default botsSlice.reducer;
