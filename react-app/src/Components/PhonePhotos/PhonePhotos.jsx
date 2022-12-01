import React from 'react';

import './PhonePhotos.css';


function PhonePhotos() {

    return (
        <div className="main__photos">
                <div className="phone-photos">
                    <img className="phone-photos__img" src="./images/image-1.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                    <img className="phone-photos__img" src="./images/image-2.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                    <img className="phone-photos__img" src="./images/image-3.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                    <img className="phone-photos__img" src="./images/image-4.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                    <img className="phone-photos__img" src="./images/image-5.png" alt="Изображение телефона" />
                </div>
            </div>
    );
};

export default PhonePhotos;