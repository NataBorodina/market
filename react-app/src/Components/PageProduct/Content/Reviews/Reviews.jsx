import React from 'react';
import Review from '../Review/Review';

import './Reviews.css';

function Reviews() {
    let reviews = [
        {
            id: '1',
            firstName: 'Марк',
            lastName: 'Г.',
            photo: '/images/review-1.jpeg',
            stars: '/images/star-5.svg',
            experience: 'менее месяца',
            dignity: 'это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.',
            limitations: 'к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное',
        },
        {
            id: '2',
            firstName: 'Валерий',
            lastName: 'Коваленко',
            photo: '/images/review-2.jpeg',
            stars: '/images/star-4.svg',
            experience: 'менее месяца',
            dignity: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
            limitations: 'Плохая ремонтопригодность'
        },
        {
            id: '3',
            firstName: 'Марк',
            lastName: 'Г.',
            photo: './images/review-1.jpeg',
            stars: './images/star-5.svg',
            experience: 'менее месяца',
            dignity: 'OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго',
            limitations: 'Плохая ремонтопригодность'
        },
    ];

    return (

        <div className="reviews-block__wrapper">
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
    );
};

export default Reviews;
