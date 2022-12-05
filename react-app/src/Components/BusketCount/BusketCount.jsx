import React from 'react';
import{ useSelector } from "react-redux";
import './BusketCount.css';

function BusketCount() {

    let count = useSelector((state) => state.cart.products.length);
    let NumberClassName = `basket-icon__count ${count === 0 ? 'hidden' : ''}`

    return (
        <div className="basket-icon">
            <div className={NumberClassName}>
                <div className="basket-icon__number">
                    {count}
                </div>
            </div>
        </div>
    );
};

export default BusketCount;
