import React from 'react';
import './Photo.css';

function Photo(props) {
    let { photo } = props;

    return (
        <div className="phone-photos">
            <img className="phone-photos__img" src={photo.img} alt="Изображение телефона" />
        </div>
    );
};

export default Photo;
