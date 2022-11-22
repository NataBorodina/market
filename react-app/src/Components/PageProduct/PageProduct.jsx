import React from 'react';

import './PageProduct.css';

function PageProduct() {
  return (
    <div className="page__main">

        <main className="main">

            <nav className="main__navigation">
                <div className="breadcrumbs">
                    <div className="breadcrumbs__link">
                        <a className="link" href="#">
                            Электроника
                        </a>
                    </div>
                    <span className="breadcrumbs__simbol">
                        >
                    </span>
                    <div className="breadcrumbs__link">
                        <a className="link" href="#">
                            Смартфоны и гаджеты
                        </a>
                    </div>
                    <span className="breadcrumbs__simbol">
                        >
                    </span>
                    <div className="breadcrumbs__link">
                        <a className="link" href="#">
                            Мобильные телефоны
                        </a>
                    </div>
                    <span className="breadcrumbs__simbol">
                        >
                    </span>
                    <div className="breadcrumbs__link">
                        <a className="link" href="#">
                            Apple
                        </a>
                    </div>
                </div>
            </nav>

            <div className="main__title">
                <h1 className="header header_size_32">
                    Смартфон Apple iPhone 13, синий
                </h1>
            </div>
            <div className="main__photos">
                <div className="phone-photos">
                    <img className="phone-photos__img" src="./images/image-1.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                <img className="phone-photos__img" src="./images/image-2.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                <img className="phone-photos__img" src="./images/image-3.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                <img className="phone-photos__img" src="./images/image-4.png" alt="Изображение телефона" />
                </div>
                <div className="phone-photos">
                <img className="phone-photos__img" src="./images/image-5.png" alt="Изображение телефона" />
                </div>
            </div>

            <div className="main__content">
                <div className="main__left-side">

                    <div className="main__color">
                        <section className="color-block">
                            <div className="color-block__title">
                                <h4 className="header header_size_16">
                                    Цвет товара: Синий
                                </h4>
                            </div>
                            <div className="color-block__row-buttons">

                                <div className="color-block__button">
                                    <input className="radio-button button" type="radio" id="red" name="radio-color" />
                                    <label className="color-block__label label" for="red">
                                        <img className="color-block__img" src="./images/color-1.webp"
                                            alt="Apple iPhone 13 red" />
                                    </label>
                                </div>

                                <div className="color-block__button">
                                    <input className="radio-button button" type="radio" id="green" name="radio-color" />
                                    <label className="color-block__label label" for="green">
                                        <img className="color-block__img" src="./images/color-2.webp"
                                            alt="Apple iPhone 13 green" />
                                    </label>
                                </div>

                                <div className="color-block__button">
                                    <input className="radio-button button" type="radio" id="pink" name="radio-color" />
                                    <label className="color-block__label label" for="pink">
                                        <img className="color-block__img" src="./images/color-3.webp"
                                            alt="Apple iPhone 13 pink" />
                                    </label>
                                </div>

                                <div className="color-block__button">
                                    <input className="radio-button button" type="radio" id="blue" name="radio-color"
                                        defaultChecked />
                                    <label className="color-block__label label" for="blue">
                                        <img className="color-block__img" src="./images/color-4.webp"
                                            alt="Apple iPhone 13 blue" />
                                    </label>
                                </div>

                                <div className="color-block__button">
                                    <input className="radio-button button" type="radio" id="white" name="radio-color" />
                                    <label className="color-block__label label" for="white">
                                        <img className="color-block__img" src="./images/color-5.webp"
                                            alt="Apple iPhone 13 white" />
                                    </label>
                                </div>

                                <div className="color-block__button">
                                    <input className="radio-button button" type="radio" id="black" name="radio-color" />
                                    <label className="color-block__label label" for="black">
                                        <img className="color-block__img" src="./images/color-6.webp"
                                            alt="Apple iPhone 13 black" />
                                    </label>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="main__memory">

                        <section className="memory-block">
                            <div className="memory-block__title">
                                <h4 className="header header_size_16">
                                    Конфигурация памяти: 128 ГБ
                                </h4>
                            </div>
                            <div className="memory-block__row-buttons">

                                <input className="radio-button button" type="radio" id="gb128" name="radio" defaultChecked />
                                <label className="memory-block__label label" for="gb128">
                                    128 ГБ
                                </label>

                                <input className="radio-button button" type="radio" id="gb256" name="radio" />
                                <label className="memory-block__label label" for="gb256">
                                    256 ГБ
                                </label>

                                <input className="radio-button button" type="radio" id="gb512" name="radio" />
                                <label className="memory-block__label label" for="gb512">
                                    512 ГБ
                                </label>
                            </div>
                        </section>
                    </div>

                    <div className="main__feature">

                        <section className="feature-block">
                            <div className="feature-block__title">
                                <h4 className="header header_size_16">
                                    Характеристики товара
                                </h4>
                            </div>
                            <ul className="feature-block__list">
                                <li className="feature-block__line">
                                    Экран:
                                    <span className="bold-text">
                                        6.1
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Встроенная память:
                                    <span className="bold-text">
                                        128 ГБ
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Операционная система:
                                    <span className="bold-text">
                                        iOS 15
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Беспроводные интерфейсы:
                                    <span className="bold-text">
                                        NFC, Bluetooth, Wi-Fi
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Процессор:
                                    <span className="bold-text">
                                        <a className="link" href="https://en.wikipedia.org/wiki/Apple_A15"
                                            target="_blank">
                                            Apple A15 Bionic
                                        </a>
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Вес:
                                    <span className="bold-text">
                                        173 г
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </div>

                    <div className="main__description">

                        <section className="description-block">
                            <div className="description-block__title">
                                <h4 className="header header_size_16">
                                    Описание
                                </h4>
                            </div>
                            <div className="description-block__content">
                                <p className="paragraph">
                                    Наша самая совершенная система двух камер.<br />
                                    Особый взгляд на прочность дисплея.<br />
                                    Чип, с которым всё супербыстро.<br />
                                    Аккумулятор держится заметно дольше.<br />
                                    <span className="italic-text">
                                        iPhone 13 - сильный мира всего.
                                    </span>
                                </p>
                                <p className="paragraph">
                                    Мы разработали совершенно новую схему расположения и развернули объективы на
                                    45 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система
                                    двух
                                    камер с
                                    увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место
                                    для
                                    системы
                                    оптической стабилизации изображения сдвигом матрицы. И повысили скорость
                                    работы
                                    матрицы
                                    на сверхширокоугольной камере.
                                </p>
                                <p className="paragraph">
                                    Новая сверхширокоугольная камера видит больше деталей в тёмных областях
                                    снимков. Новая широкоугольная камера улавливает на 47% больше света для
                                    более
                                    качественных фотографий и видео. Новая оптическая стабилизация со сдвигом
                                    матрицы
                                    обеспечит чёткие кадры даже в неустойчивом положении.
                                </p>
                                <p className="paragraph">
                                    Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения
                                    фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект»
                                    будет
                                    удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг
                                    него.
                                    Режим
                                    «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или
                                    объект,
                                    который появился в кадре. Теперь ваши видео будут смотреться как настоящее
                                    кино.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="main__table">
                        <section className="table">
                            <div className="table__title">
                                <h3 className="header header_size_16">
                                    Сравнение моделей
                                </h3>
                            </div>
                            <table className="table__content">
                                <tr className="table__row table__row_border-bottom">
                                    <th className="table__cell">Модель</th>
                                    <th className="table__cell">Вес</th>
                                    <th className="table__cell">Высота</th>
                                    <th className="table__cell">Ширина</th>
                                    <th className="table__cell">Толщина</th>
                                    <th className="table__cell">Чип</th>
                                    <th className="table__cell">Объём памяти</th>
                                    <th className="table__cell">Аккумулятор</th>
                                </tr>
                                <tr className="table__row table__row_hover">
                                    <td className="table__cell">Iphone11</td>
                                    <td className="table__cell">194 грамма</td>
                                    <td className="table__cell">150.9 мм</td>
                                    <td className="table__cell">75.7 мм</td>
                                    <td className="table__cell">8.3 мм</td>
                                    <td className="table__cell">A13 Bionicchip</td>
                                    <td className="table__cell">до 128 Гб</td>
                                    <td className="table__cell">До 17 часов</td>
                                </tr>
                                <tr className="table__row table__row_hover">
                                    <td className="table__cell">Iphone12</td>
                                    <td className="table__cell">164 грамма</td>
                                    <td className="table__cell">146.7 мм</td>
                                    <td className="table__cell">71.5 мм</td>
                                    <td className="table__cell">7.4 мм</td>
                                    <td className="table__cell">A14 Bionicchip</td>
                                    <td className="table__cell">до 256 Гб</td>
                                    <td className="table__cell">До 19 часов</td>
                                </tr>
                                <tr className="table__row table__row_hover">
                                    <td className="table__cell">Iphone13</td>
                                    <td className="table__cell">174 грамма</td>
                                    <td className="table__cell">146.7 мм</td>
                                    <td className="table__cell">71.5 мм</td>
                                    <td className="table__cell">7.65 мм</td>
                                    <td className="table__cell">A15 Bionicchip</td>
                                    <td className="table__cell">до 512 Гб</td>
                                    <td className="table__cell">До 19 часов</td>
                                </tr>
                            </table>
                        </section>
                    </div>

                    <div className="main__reviews">
                        <section className="reviews-block">

                            <div className="reviews-block__header">
                                <div className="reviews-block__title">
                                    <h2 className="header header_size_24">
                                        Отзывы
                                    </h2>
                                </div>
                                <span className="reviews-block__count">
                                    425
                                </span>
                            </div>

                            <div className="reviews-block__wrapper">

                                <div className="review">
                                    <img className="review__photo" src="./images/review-1.jpeg"
                                        alt="Фото пользователя" />
                                    <div className="review__content">
                                        <div className="review__name">
                                            <h3 className="header header_size_20">
                                                Марк Г.
                                            </h3>
                                        </div>
                                        <img className="review__stars" src="./images/star-5.svg"
                                            alt="Пять звезд" />
                                        <div className="review__text">
                                            <p className="paragraph">
                                                <span className="bold-text">
                                                    Опыт использования:
                                                </span>
                                                менее месяца
                                            </p>
                                            <p className="paragraph">
                                                <span className="bold-text">
                                                    Достоинства:
                                                </span>
                                                <br />
                                                это мой первый айфон после после огромного количества телефонов
                                                на
                                                андроиде.
                                                всё плавно, чётко и красиво. довольно шустрое устройство. камера
                                                весьма
                                                неплохая, ширик тоже на высоте.
                                            </p>
                                            <p className="paragraph">
                                                <span className="bold-text">
                                                    Недостатки:
                                                </span>
                                                <br />
                                                к самому устройству мало имеет отношение, но перенос данных с
                                                андроида -
                                                адская
                                                вещь) а если нужно переносить фото с компа, то это только через
                                                itunes,
                                                который
                                                урезает качество фотографий исходное
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="separator">
                                    <hr className="separator__line" />
                                </div>

                                <div className="review">
                                    <img className="review__photo" src="./images/review-2.jpeg"
                                        alt="Фото пользователя" />
                                    <div className="review__content">
                                        <div className="review__name">
                                            <h3 className="header header_size_20">
                                                Валерий Коваленко
                                            </h3>
                                        </div>
                                        <img className="review__stars" src="./images/star-4.svg"
                                            alt="Четыре звезды" />
                                        <div className="review__text">
                                            <p className="paragraph">
                                                <span className="bold-text">
                                                    Опыт использования:
                                                </span>
                                                менее месяца
                                            </p>
                                            <p className="paragraph">
                                                <span className="bold-text">
                                                    Достоинства:
                                                </span>
                                                <br />
                                                OLED экран, Дизайн, Система камер,
                                                Шустрый А15, Заряд держит долго
                                            </p>
                                            <p className="paragraph">
                                                <span className="bold-text">
                                                    Недостатки:
                                                </span>
                                                <br />
                                                Плохая ремонтопригодность
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="main__addreview">
                        <section className="addreview-block">
                            <div className="addreview-block__title">
                                <h3 className="header header_size_16">
                                    Добавить свой отзыв
                                </h3>
                            </div>

                            <form className="addreview-block__form" novalidate>
                                <div className="addreview-block__row">
                                        <div className="addreview-block__name-input">
                                            <input className="addreview-input addreview-name" type="text" name="name"
                                                placeholder="Имя и фамилия" required />
                                            <div className="addreview-block__error error-name hidden"></div>
                                    </div>
                                    <div className="addreview-block__grade-input">
                                        <input className="addreview-input addreview-grade" type="text" name="grade"
                                            placeholder="Оценка" min="1" max="5" step="1" required />
                                        <div className="addreview-block__error error-grade hidden">Оценка должна быть от 1 до 5
                                        </div>
                                    </div>
                                </div>
                                <div className="addreview-block__text-input">
                                    <textarea className="addreview-input addreview-textarea" name="text" rows="8"
                                        placeholder="Текст отзыва"></textarea>
                                </div>
                                <button className="addreview-block__button add-button" type="submit">Отправить
                                    отзыв</button>
                            </form>
                        </section>
                    </div>
                </div>

                <aside className="main__right-side">

                    <div className="main__offer">

                        <div className="offer">
                            <div className="offer__prise">
                                <div className="offer__prise-pow">
                                    <p className="offer__oldprice">
                                        <span className="strikethrough-text">
                                            75 990₽
                                        </span>
                                    </p>
                                    <div className="offer__discount">
                                        -8%
                                    </div>
                                    <form className="offer__heart">
                                        <label className="heart-label">
                                            <input className="heart-input" type="checkbox" id="heart" name="checkbox" />
                                            <span className="heart-picture"></span>
                                        </label>
                                    </form>
                                </div>
                                <p className="offer__newprice">
                                    67 990₽
                                </p>
                            </div>
                            <div className="offer__delivery">
                                <p className="offer__self-delivery">
                                    Самовывоз в четверг, 1 сентября —
                                    <span className="bold-text">
                                        бесплатно
                                    </span>
                                </p>
                                <p className="offer__courier">
                                    Курьером в четверг, 1 сентября —
                                    <span className="bold-text">
                                        бесплатно
                                    </span>
                                </p>
                            </div>
                            <button className="offer__basket-button add-button">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>

                    <div className="main__frames">
                        <div className="frames">
                            <p className="frames__text">
                                Реклама
                            </p>
                            <div className="frames__blocks">
                                <iframe className="frames__ads-block" src="./ads/ads.html">
                                </iframe>
                                <iframe className="frames__ads-block" src="./ads/ads.html">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    </div>
  );
};

export default PageProduct;