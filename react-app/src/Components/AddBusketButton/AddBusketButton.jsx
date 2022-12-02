import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../reducers/cart-reduser";
import './AddBusketButton.css';

function AddBusket(props) {

    let { product } = props;
    let products = useSelector((store) => store.cart.products);
    let dispatch = useDispatch();

    let hasInCart = products.some((prevProduct) => {
        return prevProduct.id === product.id;
    });

    function handleAddOrRemove(e, product) {

        let buttonClassName = 'basket-button add-button active-button'
        
        if (hasInCart) {
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

    let buttonClassName = `basket-button add-button ${hasInCart ? 'delete-button' : ''}`;
    let buttonText = `${hasInCart ? 'Товар уже в корзине' : 'Добавить в корзину'}`

    return (
        <button
            className={buttonClassName}
            onClick={(e) => handleAddOrRemove(e, product)}>
            {buttonText}
        </button>
    );
};

export default AddBusket;
