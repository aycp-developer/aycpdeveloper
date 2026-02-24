import React from 'react';
import './Footer.css';
import { backgroundFooter, aycpdeveloperLogo } from '../../assets/assets';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='div3'>
                <div className='content'>
                    <div className='logo-recommended-resources-container'>
                        <img className='aycpdeveloper-logo' src={aycpdeveloperLogo} alt='AYCP DEVELOPER' />
                        <div className='recommended-pages'>
                            <h2>Páginas Recomendadas</h2>
                            <ul>
                                <li>
                                    <a href='https://developer.mozilla.org/es/' target='_blank' rel="noreferrer">
                                        MDN
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.geeksforgeeks.org/' target='_blank' rel="noreferrer">
                                        GeeksforGeeks
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.w3schools.com/' target='_blank' rel="noreferrer">
                                        W3Schools
                                    </a>
                                </li>
                                <li>
                                    <a href='https://daily.dev/es' target='_blank' rel="noreferrer">
                                        daily.dev
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='recommended-channels'>
                            <h2>Canales de Youtube Recomendados</h2>
                            <ul>
                                <li>
                                    <a href='https://www.youtube.com/@OpenBootcamp' target='_blank' rel="noreferrer">
                                        OpenBootcamp
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/@freecodecamp' target='_blank' rel="noreferrer">
                                        freeCodeCamp
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.youtube.com/@NetNinja' target='_blank' rel="noreferrer">
                                        TheNetNinja
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='recommended-bootcamps'>
                            <h2>Bootcamps Recomendados</h2>
                            <ul>
                                <li>
                                    <a href='https://ultracamp.es/' target='_blank' rel="noreferrer">
                                        UltraCamp
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.freecodecamp.org/' target='_blank' rel="noreferrer">
                                        freeCodeCamp
                                    </a>
                                </li>
                                <li>
                                    <a href='https://fireship.io/' target='_blank' rel="noreferrer">
                                        Fireship
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className='copyright'>
                        Copyright © 2026 Developed by Alexander Yosimar Cervantes Pineda
                    </p>
                </div>
            </div>
            <div className='div4'>
                <img className='background-footer' src={backgroundFooter} alt="background footer" />
            </div>
        </div>
    );
};

export default Footer;