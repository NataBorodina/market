import React from 'react';
import { Link } from "react-router-dom";
import { linksObject } from '../../mocks/data';
import './LinkTo.css';


function LinkTo(props) {

    let { link } = props;
    let lastSimbol = (link.id === linksObject.length.toString());
    let className = `breadcrumbs__simbol ${lastSimbol ? 'last' : ''}`;

    return (
        <div className="breadcrumbs__link">
            <Link to={link.value} className="link">
                {link.name}
            </Link>
            <span className={className}>
                &gt;
            </span>
        </div>
    )
};

export default LinkTo;
