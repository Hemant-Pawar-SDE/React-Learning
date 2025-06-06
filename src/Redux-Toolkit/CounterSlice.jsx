import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      return {count:state.count+1};
    },

    decrement: (state) => {
      return {count:state.count - 1};
    },
    reset: (state) => {
      return {count : 0};
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
