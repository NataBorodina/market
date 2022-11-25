import React from 'react';

import './Configs.css';
import ConfigButton from '../ConfigButton/ConfigButton'

function Configs() {

    let memory = ['54', '128', '256', '512'];

    return (
                <div className="memory-block__row-buttons">
                    {memory.map((memory) => (
                        <ConfigButton key={memory} memory={memory}/> 
                    ))}
                </div>
    );
};

export default Configs;
