import React from 'react';

import './FavoritesButton.css';


function FavoritesButton() {

    return (
        <form className="favorites-button">
            <label className="favorites-label">
                <input className="favorites-input" type="checkbox" id="heart" name="checkbox" />
                <span className="favorites-picture"></span>
            </label>
        </form>
    );
};

export default FavoritesButton;