import React from 'react';
import Price from '../Price/Price';
import Delivery from '../Delivery/Delivery';
import AddBusket from '../AddBusketButton/AddBusketButton';
import './Offer.css';

function Offer() {

    return (
        <div className="offer">
            <div className="offer__prise">
                <Price />
            </div>
            <div className="offer__delivery">
                <Delivery />
            </div>
            <div className="offer__basket-button">
                <AddBusket product = {{ id: 1, name: 'Iphone 13' }} />
            </div >
        </div >
    );
};

export default Offer;
