import React from 'react';
import { Link } from "react-router-dom";
import './Logo.css';

function Logo() {

    return (
        <Link to='/' className="logo__left-side">
            <div className="logo__icon">
                <img className="logo__img" src="./images/logo.svg" alt="logo" />
            </div>
            <div className="logo__text">
                <span className="color-text color-text_color_red">Мой</span>Маркет
            </div>
        </Link>
    );
};

export default Logo;
