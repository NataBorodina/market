import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../src/reducers/cart-reduser';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // favorites:
    },
});
