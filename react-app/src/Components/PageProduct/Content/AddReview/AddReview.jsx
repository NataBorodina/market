import React from 'react';
import AddReviewForm from '../AddReviewForm/AddReviewForm';

import './AddReview.css';



function AddReview() {
  return (
    <div className="main__addreview">
                    <section className="addreview-block">
                        <div className="addreview-block__title">
                            <h3 className="header header_size_16">
                                Добавить свой отзыв
                            </h3>
                        </div>
<AddReviewForm />
                        
                    </section>
                </div>
  );
};

export default AddReview;