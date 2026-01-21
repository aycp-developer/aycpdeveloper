import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ style, onClick, text }) => {

    return (
        <button
            style={style}
            className='button'
            onClick={onClick}
        >
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className='text'>{text}</div>
        </button>
    );
};

Button.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default Button;