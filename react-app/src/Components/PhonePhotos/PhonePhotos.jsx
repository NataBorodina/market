import React from 'react';
import Photo from '../Photo/Photo';
import { PhotosObject } from '../../mocks/data';
import { useState } from 'react';
import './PhonePhotos.css';


function PhonePhotos() {
    let [photos] = useState(PhotosObject);

    return (
        <div className="main__photos">
            {photos.map((photo) => (
                <Photo key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default PhonePhotos;
