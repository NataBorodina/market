import React from 'react';
import Logo from '../Logo/Logo';
import Icons from '../Icons/Icons';
import './Header.css';

function Header() {
    return (
        <div className='page__header'>
            <div className='header'>
                <div className='header__content'>
                    <Logo />
                    <Icons />
                </div>
            </div>
        </div>
    );
};

export default Header;


// let HeaderWrapper = styled.div`
//     position: fixed;
//     top: 0;
//     z-index: 1;
//     width: 100vw;
//     background-color: #F8FAFE;
//     border-bottom: 1px solid #081658;
// `;

// let PageHeader = styled.header`
//     max-width: 1400px;
//     margin: auto;
// `;

// let Content = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     @media (max-width: 1499px) {
//         padding: 0 15px;
// }
// `;