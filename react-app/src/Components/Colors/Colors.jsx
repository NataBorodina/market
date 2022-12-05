import React from 'react';
import { useState } from 'react';
import { colorsObjects } from '../../mocks/data'
import ColorButton from '../ColorButton/ColorButton';
import './Colors.css';

function Colors() {

    let [colors] = useState(colorsObjects);
    let [activedColor, setActivedColor] = useState("синий");
    let [hoveredColor, setHoveredColor] = useState('');

    function handleClick(e, color) {
        setActivedColor(color.value);
    }

    function handleHoveredOn(e, color) {
        setHoveredColor(color.value);
    }

    function handleHoveredOff(e, color) {
        setHoveredColor('');
    }

    return (
        <section className="color-block">
            <div className="color-block__title">
                <h4 className="header header_size_16">
                    Цвет товара: {activedColor}
                </h4>
            </div>
            <div className="color-block__row-buttons">
                {colors.map((color) => (
                    <ColorButton
                        key={color.id}
                        color={color}
                        actived={color.value === activedColor}
                        onClick={(e) => handleClick(e, color)}
                        onMouseEnter={(e) => handleHoveredOn(e, color)}
                        onMouseLeave={(e) => handleHoveredOff(e, color)}
                        hovered={color.value === hoveredColor} />
                ))}
            </div>
        </section>
    );
};

export default Colors;
