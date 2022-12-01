import React from 'react';
import PageProductContent from '../../Components/PageProductContent/PageProductContent';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import './PageProduct.css';

function PageProduct() {
    return (
        <>
            <Header />
            <div className="page__main">
                <PageProductContent />
            </div>
            <Footer />
        </>
    );
};

export default PageProduct;
