import React from 'react';

import './ColorButton.css';


function ColorButton(props) {
    let { color, actived, hovered, onClick, onMouseEnter, onMouseLeave} = props;
    let className = `color-button__label ${actived ? 'color-button__label__actived' : ''} ${hovered ? 'color-button__label__hovered' : ''}`

    return (

        <div className="color-block__buttons">
            <input className="color-button" id={color.name} onClick={onClick}/>
            <label className={className} for={color.name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <img className="color-button__img" src={color.img} 
                    alt={color.name} />
            </label>
        </div>
    );
};

export default ColorButton;
