import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import CartReducer from "./slices/CartSlice.js";
import WishlistReducer from "./slices/WishListSlice.js";

const storage = {
  getItem: (key) => {
    return Promise.resolve(localStorage.getItem(key));
  },
  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: typeof window !== "undefined" ? storage : undefined,
  whitelist: ["cart","wishlist"],
};

const rootReducer = combineReducers({
  cart: CartReducer,
  wishlist: WishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
