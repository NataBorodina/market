import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../src/reducers/cart-reduser';
import favReducer from '../src/reducers/favorites-reduser';

let saver = (store) => (next) => (action) => {
    const result = next(action);
    if ( action.type = 'cart' ) {
        const cartState = store.getState().cart.products;
        localStorage.setItem('cart', JSON.stringify(cartState))
        console.log("cart", (JSON.parse(localStorage.getItem('cart'))))
      } 
    if ( action.type = 'favorites' ) {
        const favoritesState = store.getState().favorites.products;
        localStorage.setItem('favorites', JSON.stringify(favoritesState))
        console.log("favorites", (JSON.parse(localStorage.getItem('favorites'))))
      }
    return result;
}

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favReducer,
    },

    middleware: [saver],
});
