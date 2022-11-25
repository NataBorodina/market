import React from 'react';

import './ConfigButton.css';


function ConfigButton(props) {
    let { memory } = props;

    return (
        <div className="memory-block__button">
            <input className="radio-button button" type="radio" id={memory} name="radio" />
            <label className="memory-block__label label" for={memory}>
                {memory} ГБ
            </label>
        </div>
    );
};


export default ConfigButton;
