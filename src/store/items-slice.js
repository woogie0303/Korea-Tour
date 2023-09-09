import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: { fetchItems: [], cartItems: [] },
  reducers: {
    addItems(state, action) {
      if (action.payload.type === "CART") {
        state.cartItems.push(action.payload);
      } else {
        state.fetchItems = [];
        state.fetchItems.push(...action.payload);
      }
    },

    changeCartIn(state, action) {
      if (!action.payload.cartIn) {
        const cartInTrueItemIndex = state.fetchItems.findIndex(
          val => val.contentid === action.payload.contentid
        );

        state.fetchItems[cartInTrueItemIndex].cartIn = true;
      } else {
        state.cartItems = state.cartItems.filter(
          val => action.payload.contentid !== val.contentid
        );

        const cartInFalseItemIndex = state.fetchItems.findIndex(
          val => action.payload.contentid === val.contentid
        );

        state.fetchItems[cartInFalseItemIndex].cartIn = false;
      }
    },

    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter(
        val => action.payload.contentid !== val.contentid
      );
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
