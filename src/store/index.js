import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import itemsSlice from "./items-slice";

const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
