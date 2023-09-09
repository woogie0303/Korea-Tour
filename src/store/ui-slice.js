import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showState: {
      notification: false,
      showComponent: false,
    },

    notification: null,
  },
  reducers: {
    showItems(state) {
      state.showState.notification = false;
      state.showState.showComponent = true;
    },
    showNotification(state, action) {
      state.showState.showComponent = false;
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
