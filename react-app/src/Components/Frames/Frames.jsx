import React from 'react';

import './Frames.css';


function Frames() {

    return (
        <div className="frames">
            <p className="frames__text">
                Реклама
            </p>
            <div className="frames__blocks">
                <iframe className="frames__ads-block" src="./ads/ads.html">
                </iframe>
                <iframe className="frames__ads-block" src="./ads/ads.html">
                </iframe>
            </div>
        </div>
    );
};

export default Frames;