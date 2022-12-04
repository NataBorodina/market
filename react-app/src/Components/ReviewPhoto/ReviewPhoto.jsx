import React from 'react';
import './ReviewPhoto.css';

function ReviewPhoto(props) {
    let { review } = props;

    return (
        <img className="review-photo" src={review.photo}
            alt="Фото пользователя" />
    );
};

export default ReviewPhoto;



