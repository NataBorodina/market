import React from 'react';
import './ReviewGrade.css';

function ReviewGrage(props) {
    let { review } = props;

    return (
        <img className="review-grade" src={review.stars}
            alt="Оценка" />
    );
};
export default ReviewGrage;
