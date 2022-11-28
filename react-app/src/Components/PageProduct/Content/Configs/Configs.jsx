import React from 'react';
import { useState } from 'react';
import { memoryObject } from '../../../../mocks/data'
import './Configs.css';
import ConfigButton from '../ConfigButton/ConfigButton'

function Configs() {

    let [memory, setMemory] = useState(memoryObject);
    let [activedMemory, setActivedMemory] = useState('128');
    let [hoveredMemory, setHoveredMemory] = useState('');

    function handleClick(e, memory) {
        setActivedMemory(memory.value);
    }

    function handleHoveredOn(e, memory) {
        setHoveredMemory(memory.value);
    }

    function handleHoveredOff(e, memory) {
        setHoveredMemory('');
    }

    return (
        <>
            <div className="memory-block__title">
                <h4 className="header header_size_16">
                    Конфигурация памяти: {activedMemory} ГБ
                </h4>
            </div>
            <div className="memory-block__row-buttons">
                {memory.map((memory) => (
                    <ConfigButton
                        key={memory.id}
                        memory={memory}
                        actived={memory.value === activedMemory.toString()}
                        onClick={(e) => handleClick(e, memory)}
                        onMouseEnter={(e) => handleHoveredOn(e, memory)}
                        onMouseLeave={(e) => handleHoveredOff(e, memory)}
                        hovered={memory.value === hoveredMemory.toString()}/>
                ))}
            </div>
        </>
    );
};

export default Configs;
