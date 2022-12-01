import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import PageIndexContent from './PageIndexContent/PageIndexContent'
import './PageIndex.css';

function PageIndex() {
  return (
    <div>
      <Header />
      <div className="page-index">
        <PageIndexContent
          text={
            <p className='index-content_text'>
              Здесь должно быть содержимое главной страницы.
              <br />
              Но в рамках курса главная страница используется лишь
              в демонстрационных целях
            </p>
          }
          link={
            <div className='index-content_wrapper'>
            <Link to='/product'>Перейти на страницу товара</Link>
            </div>
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default PageIndex;
