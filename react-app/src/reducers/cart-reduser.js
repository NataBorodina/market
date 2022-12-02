import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        products: JSON.parse(localStorage.getItem('inBasket')) || []
    },

    reducers: {
        addProduct: (prevState, action) => {

            let product = action.payload;
            console.log('product (reduser) ' + (product.id));
            let hasInCart = prevState.products.some((prevProduct) => prevProduct.id === product.id);
            if (hasInCart === true) return prevState;

            let newState = {
                ...prevState, products: [...prevState.products, product],
            };
            console.log(newState);
            localStorage.setItem('inBasket', JSON.stringify(newState.products));
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
            localStorage.setItem('inBasket', JSON.stringify(newState.products));
            return newState;
        },
    },
    
});


export const { addProduct } = cartSlice.actions;
export const { removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
