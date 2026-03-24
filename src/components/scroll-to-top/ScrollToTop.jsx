import { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { ArrowUp } from 'react-bootstrap-icons';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <button
                onClick={scrollToTop}
                aria-label="Volver al inicio"
                className="scroll-to-top-button"
            >
                <ArrowUp className='arrow-up' />
            </button>
        </div>
    );

};

export default ScrollToTop;