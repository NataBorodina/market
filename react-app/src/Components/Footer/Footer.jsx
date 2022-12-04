import React from 'react';
import { useCurrentDate } from "@kundinos/react-hooks";
import './Footer.css';

function Footer() {

    let currentDate = useCurrentDate();
    let currentYear = currentDate.getFullYear();
    return (
        <div className="page__footer">

            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__left-side">
                        <p className="footer__copyright bold-text">
                            &copy; ООО «<span className="color-text color-text_color_red">Мой</span>Маркет»,{' '}
                            <span>2018-{currentYear}</span>
                        </p>
                        <p className="footer__telephone-number">
                            Для уточнения информации звоните по
                            номеру{' '}
                            <a className="link" href="tel:79000000000">
                                +7 900 0000000
                            </a>
                            ,
                        </p>
                        <p className="footer__email">
                            а предложения по сотрудничеству отправляйте на почту{' '}
                            <a className="link" href="mailto:partner@mymarket.com">
                                partner@mymarket.com
                            </a>
                        </p>
                    </div>
                    <div className="footer__right-side">
                        <a className="link" href="#">
                            Наверх
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
