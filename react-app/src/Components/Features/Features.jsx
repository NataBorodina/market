import React from 'react';

import './Features.css';


function Features() {

    return (
        <section className="feature-block">
                            <div className="feature-block__title">
                                <h4 className="header header_size_16">
                                    Характеристики товара{' '}
                                </h4>
                            </div>
                            <ul className="feature-block__list">
                                <li className="feature-block__line">
                                    Экран:{' '}
                                    <span className="bold-text">
                                        6.1
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Встроенная память:{' '}
                                    <span className="bold-text">
                                        128 ГБ
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Операционная система:{' '}
                                    <span className="bold-text">
                                        iOS 15
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Беспроводные интерфейсы:{' '}
                                    <span className="bold-text">
                                        NFC, Bluetooth, Wi-Fi
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Процессор:{' '}
                                    <span className="bold-text">
                                        <a className="link" href="https://en.wikipedia.org/wiki/Apple_A15"
                                            target="_blank">
                                            Apple A15 Bionic
                                        </a>
                                    </span>
                                </li>
                                <li className="feature-block__line">
                                    Вес:{' '}
                                    <span className="bold-text">
                                        173 г
                                    </span>
                                </li>
                            </ul>
                        </section>
    );
};

export default Features;
