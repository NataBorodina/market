import React from 'react';
import FavoritesCount from '../FavoritesCount/FavoritesCount';
import BusketCount from '../BusketCount/BusketCount';

import './Icons.css';

function Icons() {

    return (
        <div className="logo__icons">
            <FavoritesCount />
            <BusketCount />
        </div>
    );
};

export default Icons;
