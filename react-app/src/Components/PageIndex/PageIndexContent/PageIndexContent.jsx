import React from 'react';
import './PageIndexContent.css';


function PageIndexContent(props) {
    let { text, link, } = props;
    return (
        <div className='index-content'>
            <div>
                {text}
                {link}
            </div>
        </div>
    );
};

export default PageIndexContent;