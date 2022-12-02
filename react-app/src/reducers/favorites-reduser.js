import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
    name: "favorites",

    initialState: {
        products: JSON.parse(localStorage.getItem('inFav')) || []
    },

    reducers: {
        addProduct: (prevState, action) => {

            let product = action.payload;
            console.log('product (reduser) ' + (product.id));
            let hasInFav = prevState.products.some((prevProduct) => prevProduct.id === product.id);
            if (hasInFav === true) return prevState;

            let newState = {
                ...prevState, products: [...prevState.products, product],
            };
            console.log(newState);
            localStorage.setItem('inFav', JSON.stringify(newState.products));
            return newState;
        },

        removeProduct: (prevState, action) => {
            let product = action.payload;
            let newState = {
                ...prevState, products: [...prevState.products.filter((prevProduct) => {
                    return prevProduct.id !== product.id
                })],
            };
            console.log(newState);
            localStorage.setItem('inFav', JSON.stringify(newState.products));
            return newState;
        },
    },
    
});


export const { addProduct } = favSlice.actions;
export const { removeProduct } = favSlice.actions;

export default favSlice.reducer;
