import React from 'react';
import Review from '../Review/Review';
import {reviewsData} from '../../../../mocks/data'

import './Reviews.css';
import { useState } from 'react';

function Reviews() {

    let [reviews, setReviews] = useState(reviewsData);
   
    return (

        <div className="main__reviews">
            <section className="reviews-block">
                <div className="reviews-block__header">
                    <div className="reviews-block__title">
                        <h2 className="header header_size_24">
                            Отзывы
                        </h2>
                    </div>
                    <span className="reviews-block__count">
                       {reviews.length}
                    </span>
                </div>

                <div className="reviews-block__wrapper">
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Reviews;
