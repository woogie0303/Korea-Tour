import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import visitSlice from "./visit-slice";

const store = configureStore({
  reducer: {
    visit: visitSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
