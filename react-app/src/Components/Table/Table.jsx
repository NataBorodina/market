import React from 'react';
import './Table.css';

function Table() {

    return (
        <section className="table">
            <div className="table__title">
                <h3 className="header header_size_16">
                    Сравнение моделей
                </h3>
            </div>
            <table className="table__content">
                <thead>
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
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </section>
    );
};

export default Table;
