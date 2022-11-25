import React from 'react';
import Content from './Content/Content';

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
            <Content />
        </main>
    </div>
  );
};

export default PageProduct;