import React from 'react';

import './ColorButton.css';


function ColorButton(props) {
    let { color } = props;

    return (
        <div className="color-block__button">
            <input className="radio-button button" type="radio" id={color.name} name="radio-color" />
            <label className="color-block__label label" for={color.name}>
                <img className="color-block__img" src={color.img} 
                    alt={color.name} />
            </label>
        </div>
    );
};

export default ColorButton;
