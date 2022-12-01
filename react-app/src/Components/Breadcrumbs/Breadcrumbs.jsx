import React from 'react';
import { Link } from "react-router-dom";

import './Breadcrumbs.css';


function Breadcrumbs() {

    return (
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
    );
};

export default Breadcrumbs;
