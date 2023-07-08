import { createSlice } from "@reduxjs/toolkit";

const visitSlice = createSlice({
  name: "visit",
  initialState: { items: [] },
  reducers: {
    addVisitItem(state, action) {
      state.items = [];
      state.items.push(...action.payload);
    },
  },
});

export const visitActions = visitSlice.actions;
export default visitSlice;
