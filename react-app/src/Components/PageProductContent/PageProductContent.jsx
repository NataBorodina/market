import React from 'react';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Colors from '../Colors/Colors';
import Configs from '../Configs/Configs';
import Reviews from '../Reviews/Reviews';
import AddReview from '../AddReview/AddReview';
import MainTitle from '../MainTitle/MainTitle';
import PhonePhotos from '../PhonePhotos/PhonePhotos'
import Features from '../Features/Features';
import Description from '../Description/Description';
import Table from '../Table/Table';
import Offer from '../Offer/Offer';
import Frames from '../Frames/Frames';
import './PageProductContent.css';


function PageProductContent() {
    return (
        <main className="main">

            <Breadcrumbs />

            <MainTitle />

            <PhonePhotos />

            <div className="main__content">
                <div className="main__left-side">
                    <div className="main__color">
                        <Colors />
                    </div>

                    <div className="main__memory">
                        <Configs />
                    </div>

                    <div className="main__feature">
                        <Features />
                    </div>

                    <div className="main__description">
                        <Description />
                    </div>

                    <div className="main__table">
                        <Table />
                    </div>

                    <div className="main__reviews">
                        <Reviews />
                    </div>

                    <div className="main__addreview">
                        <AddReview />
                    </div>
                </div>

                <aside className="main__right-side">

                    <div className="main__offer">
                        <Offer />
                    </div>

                    <div className="main__frames">
                        <Frames />
                    </div>
                </aside>

            </div>
        </main>
    );
};

export default PageProductContent;
