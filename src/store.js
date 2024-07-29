import userReducer from "./features/users/userSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";


const store = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer,
  },
});

export default store;
