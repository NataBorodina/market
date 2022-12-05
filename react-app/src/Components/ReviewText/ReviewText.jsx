import React from 'react';
import './ReviewText.css';

function ReviewText(props) {
    let { review } = props;

    return (
        <div className="review-text">
            <p className="paragraph">
                <span className="bold-text">
                    Опыт использования:&nbsp;
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
    );
};
export default ReviewText;
