import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/shoppingcart/shoppingcart';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})