"use strict"

// Упражнение 2

let product = {
    name: 'Apple iPhone 13',
    img: [
        './images/image/image-1.png',
        './images/image/image-2.png',
        './images/image/image-3.png',
        './images/image/image-4.png',
        './images/image/image-5.png',
    ],
    color: 'blue',
    possibleСolors: ['green', 'red', 'pink', 'blue', 'white', 'black',],
    memoryConfiguration: 128,
    possibleMemory: [128, 256, 512,]
    screen: 6.1,
    operatingSystem: 'iOS 15',
    isNFC: true,
    isBluetooth: true,
    isWiFi: true,
    processor: 'Apple A15 Bionic',
    weightInGramm: 173,
    description: `Наша самая совершенная система двух камер.
    Особый взгляд на прочность дисплея.
    Чип, с которым всё супербыстро.
    Аккумулятор держится заметно дольше.
    iPhone 13 - сильный мира всего.
    
    Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса
    поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место
    для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.
    
    Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47%
    больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры
    даже в неустойчивом положении.
    
    Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись
    видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим
    «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео
    будут смотреться как настоящее кино.`,
    costInRubles: 67990,
    oldCostInRubles: 75990,
    discountInPercent: 8,
    delivery: [
        { name: 'Самовывоз', date: 'четверг, 1 сентября', cost: '0', },
        { name: 'Курьером', date: 'четверг, 1 сентября', cost: '0', },
    ],
};

let review1 = {
    authorsName: 'Марк Г.',
    authorsPhoto: './images/review/review-1.jpeg',
    rating: 5,
    userExperience: 'менее месяца',
    advantages: `это мой первый айфон после после огромного количества телефонов на андроиде. всё плавно, чётко и красиво.
    довольно шустрое устройство. камера весьма неплохая, ширик тоже на высоте.`,
    disadvantages: `к самому устройству мало имеет отношение, но перенос данных с андроида - адская вещь) а если нужно
    переносить фото с компа, то это только через itunes, который урезает качество фотографий исходное`,
};

let review2 = {
    authorsName: 'Валерий Коваленко',
    authorsPhoto: './images/review/review-2.jpeg',
    rating: 4,
    userExperience: 'менее месяца',
    advantages: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
    disadvantages: `Плохая ремонтопригодность`,
};
