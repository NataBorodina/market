import React from 'react';
import FavoritesButton from '../FavoritesButton/FavoritesButton';
import styles from './Price.module.css';

function Price() {

    return (
        <div className="prise">
            <div className={ styles.row }>
                <p className={ styles.oldprice }>
                    <span className="strikethrough-text">
                        75 990₽
                    </span>
                </p>
                <div className={ styles.discount }>
                    -8%
                </div>
                <FavoritesButton product = {{ id: 1, name: 'Iphone 13' }} />
            </div>
            <p className={ styles.newprice }>
                67 990₽
            </p>
        </div>
    );
};

export default Price;
