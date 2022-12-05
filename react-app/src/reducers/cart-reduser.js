import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        products: JSON.parse(localStorage.getItem('cart')) || []
    },

    reducers: {
        addProduct: (prevState, action) => {

            let product = action.payload;
            let products = [...prevState.products, product];
            let hasInCart = prevState.products.some((prevProduct) => prevProduct.id === product.id);
            if (hasInCart === true) return prevState;

            let newState = {
                ...prevState, products,
            };
            return newState;
        },

        removeProduct: (prevState, action) => {

            let product = action.payload;
            let products = [...prevState.products.filter((prevProduct) => {
                return prevProduct.id !== product.id
            })];
            let newState = {
                ...prevState, products,
            };
            return newState;
        },
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
