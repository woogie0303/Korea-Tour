import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showState: {
      notification: false,
      visitChart: false,
    },

    notification: null,
  },
  reducers: {
    showVisitChart(state) {
      state.showState.notification = false;
      state.showState.visitChart = true;
    },
    showNotification(state, action) {
      state.showState.visitChart = false;
      state.showState.notification = true;
      state.notification = {
        type: action.payload.type,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
