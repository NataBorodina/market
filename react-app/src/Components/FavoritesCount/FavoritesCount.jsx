import React from 'react';
import { useSelector } from "react-redux";

import './FavoritesCount.css';


function FavoritesCount() {

    let count = useSelector((state) => state.favorites.products.length);
    let NumberClassName = `favorites-icon__count ${count === 0 ? 'hidden' : ''}`

    return (
        <div className="favorites-icon">
            <div className={NumberClassName}>
                <div className="favorites-icon__number">
                    {count}
                </div>
            </div>
        </div>
    );
};

export default FavoritesCount;
