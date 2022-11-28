import React from 'react';

import './Review.css';


function Review(props) {
    let { review } = props;

    return (
        <div className='review-wrapper'>
            <div className="review">
                <img className="review__photo" src={review.photo}
                    alt="Фото пользователя" />
                <div className="review__content">
                    <div className="review__name">
                        <h3 className="header header_size_20">
                            {review.firstName} {review.lastName}
                        </h3>
                    </div>
                    <img className="review__stars" src={review.stars}
                        alt="Оценка" />
                    <div className="review__text">
                        <p className="paragraph">
                            <span className="bold-text">
                                Опыт использования:
                            </span>
                            {review.experience}
                        </p>
                        <p className="paragraph">
                            <span className="bold-text">
                                Достоинства:
                            </span>
                            <br />
                            {review.dignity}
                        </p>
                        <p className="paragraph">
                            <span className="bold-text">
                                Недостатки:
                            </span>
                            <br />
                            {review.limitations}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
