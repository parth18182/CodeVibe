import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../../jwellery";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, qty } = action.payload;

      const findProduct = products.find((pro) => pro.id === id);
      const existing = state.cart.find((item) => item.id === id);

      if (existing) {
        existing.qty += qty;
      } else {
        state.cart.push({ ...findProduct, qty });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.qty < item.stock) {
        item.qty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  CartSlice.actions;
export default CartSlice.reducer;
