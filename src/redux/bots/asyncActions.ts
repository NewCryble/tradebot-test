import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBots = createAsyncThunk("bots/fetchBots", async () => {
  const { data } = await axios.get(
    "https://76c5992b38c91439.mokky.dev/tradebot-test"
  );
  return data;
});
