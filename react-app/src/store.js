import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../src/reducers/cart-reduser';
import favReducer from '../src/reducers/favorites-reduser';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favReducer,
    },
});
