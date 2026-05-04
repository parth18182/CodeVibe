// store/slices/WishlistSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../jwellery";

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },

  reducers: {
    addToWishlist: (state, action) => {
      const id = action.payload;

      const exists = state.wishlist.find((item) => item.id === id);
      if (exists) return;

      const product = products.find((p) => p.id === id);
      if (product) {
        state.wishlist.push(product);
      }
    },

    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.wishlist = state.wishlist.filter((item) => item.id !== id);
    },

    toggleWishlist: (state, action) => {
      const id = action.payload;

      const exists = state.wishlist.find((item) => item.id === id);

      if (exists) {
        state.wishlist = state.wishlist.filter((item) => item.id !== id);
      } else {
        const product = products.find((p) => p.id === id);
        if (product) {
          state.wishlist.push(product);
        }
      }
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = WishlistSlice.actions;

export default WishlistSlice.reducer;
