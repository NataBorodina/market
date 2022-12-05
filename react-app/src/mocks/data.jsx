let colorsObjects = [
    {
        id: '1',
        value: 'красный',
        img: './images/color-1.webp',
    },
    {
        id: '2',
        value: 'зеленый',
        img: './images/color-2.webp',
    },
    {
        id: '3',
        value: 'розовый',
        img: './images/color-3.webp',
    },
    {
        id: '4',
        value: 'синий',
        img: './images/color-4.webp',
    },
    {
        id: '5',
        value: 'белый',
        img: './images/color-5.webp',
    },
    
    {
        id: '6',
        value: 'черный',
        img: './images/color-6.webp',
    },
];

let memoryObject = [
    {
        id: '1', 
        value: '128',  
    },
    {
        id: '2', 
        value: '256',  
    },
    {
        id: '3', 
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
];

let linksObject = [
    {
        id: '1', 
        value: '/',  
        name: 'Электроника',
    },
    {
        id: '2', 
        value: '/1', 
        name: 'Смартфоны и гаджеты', 
    },
    {
        id: '3', 
        value: '/2', 
        name: 'Мобильные телефоны', 
    },
    {
        id: '4', 
        value: '/3', 
        name: 'Apple', 
    },
]

let PhotosObject = [
    {
        id: '1',
        img: './images/image-1.png',
    },
    {
        id: '2',
        img: './images/image-2.png',
    },
    {
        id: '3',
        img: './images/image-3.png',
    },
    {
        id: '4',
        img: './images/image-4.png',
    },
    {
        id: '5',
        img: './images/image-5.png',
    },
]

export { colorsObjects, memoryObject, reviewsData, linksObject, PhotosObject }
