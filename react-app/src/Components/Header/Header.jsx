import React from 'react';
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
  return (
<div className="page__header">

<header className="logo">
    <div className="logo__content">
        <Link to='/' className="logo__left-side">
            <div className="logo__icon">
                <img className="logo__img" src="./images/logo.svg" alt="logo" />
            </div>
            <div className="logo__text">
                <span className="color-text color-text_color_red">Мой</span>Маркет
            </div>
        </Link>
        <div className="logo__right-side">
            <div className="favorites-icon">
                <div className="favorites-icon__count">
                    <div className="favorites-icon__number">
                        1
                    </div>
                </div>
            </div>
            <div className="basket-icon">
                <div className="basket-icon__count">
                    <div className="basket-icon__number">
                        0
                    </div>
                </div>
            </div>
        </div>

    </div>
</header>
</div>
  );
};

export default Header;