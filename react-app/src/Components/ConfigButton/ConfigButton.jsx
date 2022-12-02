import React from 'react';

import './ConfigButton.css';


function ConfigButton(props) {
    let { memory, actived, hovered, onClick, onMouseEnter, onMouseLeave } = props;

    let className = `memory-button ${actived ? 'memory-button__actived' : ''} ${hovered ? 'memory-button__hovered' : ''}`

    return (
        <div className="memory-block__button">
            <button className={className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{memory.value} ГБ</button>
        </div>
    );
};


export default ConfigButton;
