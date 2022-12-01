let colorsObjects = [
    {
        id: '1',
        name: 'Красный',
        img: './images/color-1.webp',
    },
    {
        id: '2',
        name: 'Зеленый',
        img: './images/color-2.webp',
    },
    {
        id: '3',
        name: 'Розовый',
        img: './images/color-3.webp',
    },
    {
        id: '4',
        name: 'Синий',
        img: './images/color-4.webp',
    },
    {
        id: '5',
        name: 'Белый',
        img: './images/color-5.webp',
    },
    {
        id: '6',
        name: 'Серый',
        img: './images/color-1.webp',
    },
];

let memoryObject = [
    {
        id: '1', 
        value: '64',  
    },
    {
        id: '2', 
        value: '128',  
    },
    {
        id: '1', 
        value: '256',  
    },
    {
        id: '1', 
        value: '512',  
    },
]

let reviewsData = [
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

export { colorsObjects, memoryObject, reviewsData }