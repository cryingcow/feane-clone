import { createSlice } from "@reduxjs/toolkit";

export const shoppingCart = createSlice({
    name: 'cart',
    initialState: {
        cart: {},
        quantity: Array(10).fill(0)
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.cart[action.payload.id] != undefined) {
                state.quantity[action.payload.id] += 1;
            } else {
                state.cart[action.payload.id] = action.payload;
                state.quantity[action.payload.id] = 1;
            }
        },
        removeFromCart: (state, action) => {
            delete state.cart[action.payload];
        },
        increaseQuantity: (state, action) => {
            state.quantity[action.payload] += 1;
        },
        decreaseQuantity: (state, action) => {
            state.quantity[action.payload] -= 1;
        },
        clearCart: state => {
            state.cart = {}
            state.quantity.fill(0);
        }
    }
});
export const { addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } = shoppingCart.actions;
export default shoppingCart.reducer;