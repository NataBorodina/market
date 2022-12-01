import React from 'react';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div>
      <Header />
      <div className="page-notfound">
            <h1>
                404 🐈
            </h1>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
