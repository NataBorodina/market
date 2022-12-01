import React from 'react';

import Colors from './Colors/Colors';
import Configs from './Configs/Configs';
import Reviews from './Reviews/Reviews';
import AddReview from './AddReview/AddReview'

import './Content.css';


function Content() {
    return (
        <div className="main__content">
            <div className="main__left-side">

                <div className="main__color">
                    <section className="color-block">
                        <Colors />
                    </section>
                </div>

                <div className="main__memory">
                    <section className="memory-block">
                        <Configs />
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

                 <Reviews />
                 <AddReview />

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
        
    );
};

export default Content;