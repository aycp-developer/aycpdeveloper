import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ image, style, alt }) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => { setImageLoaded(true); };

    return (
        <img
            className={`image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={handleImageLoaded}
            src={image}
            style={style}
            alt={alt}
        />
    );
};

Image.propTypes = {
    image: PropTypes.string.isRequired,
    style: PropTypes.object,
    alt: PropTypes.string.isRequired
};

export default Image;