import React from 'react';

import './ColorButton.css';


function ColorButton(props) {
    let { color, actived, hovered, onClick, onMouseEnter, onMouseLeave} = props;
    let className = `color-button ${actived ? 'color-button__actived' : ''} ${hovered ? 'color-button__hovered' : ''}`

    return (

        <div className="color-block__buttons">
            <button className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <img className="color-button__img" src={color.img} 
                    alt={color.value} />
            </button>
        </div>
    );
};

export default ColorButton;
