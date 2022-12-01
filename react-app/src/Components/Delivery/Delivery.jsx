import React from 'react';
import './Delivery.css';


function Delivery() {

    return (
        <div className="delivery">
            <p className="offer__self-delivery">
                Самовывоз в четверг, 1 сентября —
                <span className="bold-text">
                    бесплатно
                </span>
            </p>
            <p className="offer__courier">
                Курьером в четверг, 1 сентября —
                <span className="bold-text">
                    бесплатно
                </span>
            </p>
        </div>
    );
};

export default Delivery;