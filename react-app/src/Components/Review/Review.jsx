import React from 'react';
import ReviewName from '../ReviewName/ReviewName'
import ReviewPhoto from '../ReviewPhoto/ReviewPhoto';
import ReviewGrade from '../ReviewGrade/ReviewGrade'
import ReviewText from '../ReviewText/ReviewText';
import { reviewsData } from '../../mocks/data';

import './Review.css';

function Review(props) {
    let { review } = props;

    let lastSimbol = (review.id === reviewsData.length.toString());
    let className = `separator__line ${lastSimbol ? 'last' : ''}`;

    return (
        <>
            <div className="review">
                <ReviewPhoto key={review.id} review={review} />
                <div className="review__content">
                    <div className="review__name">
                        <ReviewName key={review.id} review={review} />
                    </div>
                    <div className="review__grade">
                        <ReviewGrade key={review.id} review={review} />
                    </div>
                    <div className="review__text">
                        <ReviewText key={review.id} review={review} />
                    </div>
                </div>
            </div>
            <div>
                <div className="review__text-mobile">
                    <ReviewText key={review.id} review={review} />
                </div>
                <div className={className}></div>
            </div>
        </>
    );
};
export default Review;
