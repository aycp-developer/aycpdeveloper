import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './DynamicText.css';
import Typewriter from 'typewriter-effect/dist/core';

const DynamicText = ({ strings, autoStart, loop, delay, deleteSpeed }) => {

    const textRef = useRef();

    useEffect(() => {
        // eslint-disable-next-line
        const typeWriter = new Typewriter(textRef.current, {
            strings, autoStart, loop, delay, deleteSpeed
        });
    }, []);

    return (
        <span
            className='dynamic-text'
            ref={textRef}
        />
    );

};

DynamicText.propTypes = {
    strings: PropTypes.string.isRequired,
    autoStart: PropTypes.bool,
    loop: PropTypes.bool,
    delay: PropTypes.number,
    deleteSpeed: PropTypes.number
};

export default DynamicText;