import React from 'react';
import ColorButton from '../ColorButton/ColorButton';

import './Colors.css';


function Colors () {
    let colors = [
        {
            name: 'red',
            img: './images/color-1.webp',
        },
        {
            name: 'green',
            img: './images/color-2.webp',
        },
        {
            name: 'pink',
            img: './images/color-3.webp',
        },
        {
            name: 'blue',
            img: './images/color-4.webp',
        },
        {
            name: 'white',
            img: './images/color-5.webp',
        },
        {
            name: 'grey',
            img: './images/color-1.webp',
        },
    ];

    return (
               <div className="color-block__row-buttons">
                    {colors.map((color) => (
                        <ColorButton key={color.name} color={color} />
                    ))}
                </div>
    );
};

export default Colors;
