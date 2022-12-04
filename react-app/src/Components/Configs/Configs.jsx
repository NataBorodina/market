import React from 'react';
import { useState } from 'react';
import { memoryObject } from '../../mocks/data';
import ConfigButton from '../ConfigButton/ConfigButton';
import './Configs.css';

function Configs() {

    let [memory] = useState(memoryObject);
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
        <section className="memory-block">
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
                        hovered={memory.value === hoveredMemory.toString()} />
                ))}
            </div>
        </section>
    );
};

export default Configs;
