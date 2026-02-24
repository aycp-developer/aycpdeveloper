import React, { useState } from 'react';
import './Navbar.css';
import { Whatsapp } from '../../exports/exports';
import { aycpdeveloperLogo } from '../../assets/assets';

const Navbar = () => {

    const [isShowButtons, isSetIsShowButtons] = useState(false);

    const handleShowButtons = () => {
        if (!isShowButtons) {
            isSetIsShowButtons(true);
        } else {
            isSetIsShowButtons(false);
        }
    };

    return (
        <div className='navbar'>
            <img className='aycpdeveloper-logo' src={aycpdeveloperLogo} alt='AYCP DEVELOPER' />
            <div className='contact-me-container'>
                <span onClick={handleShowButtons} className='contact-me'>
                    CONTÁCTAME
                </span>
                <div className='div1'>
                    {isShowButtons && (
                        <div className='whatsapp-button'>
                            <Whatsapp />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

};

export default Navbar;