import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../reducers/favorites-reduser";

import './FavoritesButton.css';


function FavoritesButton(props) {

    let { product } = props;
    let products = useSelector((store) => store.favorites.products);
    let dispatch = useDispatch();

    let hasInFav = products.some((prevProduct) => {
        return prevProduct.id === product.id;
    });

    function handleAddOrRemove(e, product) {
        if (hasInFav) {
            const action = removeProduct(product);
            dispatch(action);
            return;
        }

        else {
            const action = addProduct(product);
            dispatch(action);
            return;
        }
    }

    let buttonClassName = `favorites-button ${hasInFav ? 'add-favorites' : ''}`;

    return (
        <button 
        className={buttonClassName}
            onClick={(e) => handleAddOrRemove(e, product)}>
        </button>
    );
};

export default FavoritesButton;
