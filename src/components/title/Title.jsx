import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ title }) => {

    return (
        <h2 className='title'>
            <span className='degrade-blue-title'>{title}</span>
        </h2>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;