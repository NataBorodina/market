import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
    name: "favorites",

    initialState: {
        products: JSON.parse(localStorage.getItem('favorites')) || []
    },

    reducers: {
        addProduct: (prevState, action) => {

            let product = action.payload;
            let products = [...prevState.products, product];
            let hasInFav = prevState.products.some((prevProduct) => prevProduct.id === product.id);
            if (hasInFav === true) return prevState;

            let newState = {
                ...prevState, products,
            };
            // console.log(newState);
            // localStorage.setItem('inFav', JSON.stringify(newState.products));
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
            // console.log(newState);
            // localStorage.setItem('inFav', JSON.stringify(newState.products));
            return newState;
        },
    },
    
});


export const { addProduct, removeProduct} = favSlice.actions;

export default favSlice.reducer;
