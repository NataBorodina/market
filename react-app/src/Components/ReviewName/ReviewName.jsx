import React from 'react';
import './ReviewName.css';


function ReviewName(props) {
    let { review } = props;

    return (
        <div className="review-name">
            <h3 className="header header_size_20">
                {review.firstName} {review.lastName}
            </h3>
        </div>
    );
};

export default ReviewName;
