import React from 'react';
import Price from '../Price/Price';
import Delivery from '../Delivery/Delivery';
import AddButton from '../AddButton/AddButton';

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
                <AddButton />
            </div >
        </div >
    );
};

export default Offer;