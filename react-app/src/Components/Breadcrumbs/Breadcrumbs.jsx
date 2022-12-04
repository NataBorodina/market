import React from 'react';
import { linksObject } from '../../mocks/data';
import { useState } from 'react';
import LinkTo from '../Link/LinkTo';
import './Breadcrumbs.css';


function Breadcrumbs() {
    let [links] = useState(linksObject);

    return (
        <div className="breadcrumbs">
            {links.map((link) => (
                <LinkTo key={link.id} link={link} /> 
            ))}
        </div>
    );
};

export default Breadcrumbs;
