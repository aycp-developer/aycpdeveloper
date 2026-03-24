import React, { useContext, useState, useEffect } from 'react';
import './Navbar.scss';
import { ButtonsContext, Whatsapp } from '../../exports/exports';
import { aycpdeveloperLogo } from '../../assets/assets';

const Navbar = () => {

    const context = useContext(ButtonsContext);
    const { buttonsState } = context.buttonsState;

    const [isShowButtons, isSetIsShowButtons] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleShowButtons = () => {
        if (!isShowButtons) {
            isSetIsShowButtons(true);
        } else {
            isSetIsShowButtons(false);
        }
    };

    return (
        <div
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{ display: buttonsState ? 'none' : 'flex' }}
        >
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