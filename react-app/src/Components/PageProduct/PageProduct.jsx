import React from 'react';
import { Link } from "react-router-dom";
import Content from './Content/Content';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import './PageProduct.css';

function PageProduct() {
  return (
    <>
    <Header />
    <div className="page__main">

        <main className="main">

            <nav className="main__navigation">
                <div className="breadcrumbs">
                    <div className="breadcrumbs__link">
                        <Link to='/' className="link">
                            Электроника
                        </Link>
                    </div>
                    <span className="breadcrumbs__simbol">
                    `{'>'}`
                    </span>
                    <div className="breadcrumbs__link">
                        <Link to='/2' className="link">
                            Смартфоны и гаджеты
                        </Link>
                    </div>
                    <span className="breadcrumbs__simbol">
                    `{'>'}`
                    </span>
                    <div className="breadcrumbs__link">
                        <Link to='/3' className="link">
                            Мобильные телефоны
                        </Link>
                    </div>
                    <span className="breadcrumbs__simbol">
                    `&gt;`
                    </span>
                    <div className="breadcrumbs__link">
                        <Link to='/4' className="link">
                            Apple
                        </Link>
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

    <Footer />
    </>
  );
};

export default PageProduct;
