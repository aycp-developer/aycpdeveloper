import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './ViewCV.css';
import { ButtonsContext, Button, Image } from '../../exports/exports';
import { cvImage } from '../../assets/assets';
import { X, ZoomIn, ZoomOut } from 'react-bootstrap-icons';

const ViewCV = ({ imageHeight, imageWidth }) => {

    const context = useContext(ButtonsContext);
    const buttonsState = context.buttonsState.buttonsState;
    const buttonsDispatch = context.buttonsDispatch;

    const [cvFileWindow, setCvFileWindow] = useState(false);
    const [scale, setScale] = useState(1);
    const [marginTop, setMarginTop] = useState(null);

    const hideButtonsDispatcher = () => {
        buttonsDispatch({
            type: 'hide',
            payload: { buttons: true }
        });
    };

    const showButtonsDispatcher = () => {
        buttonsDispatch({
            type: 'show',
            payload: { buttons: false }
        });
    };

    const showCvWindow = () => {
        hideButtonsDispatcher();
        setCvFileWindow(true);
    };

    const hideCvWindow = () => {
        showButtonsDispatcher();
        setCvFileWindow(false);
        setScale(1);
        setMarginTop(null);
    };

    const zoomIn = () => {
        setScale(scale + 1.4);
        setMarginTop(marginTop + 120);

        if ((scale >= 2.3) && (marginTop >= 119)) {
            setScale(2.4);
            setMarginTop(120);
        }
    };

    const zoomOut = () => {
        setScale(scale - 1.4);
        setMarginTop(marginTop - 120);

        if ((scale <= 1.1) && (marginTop <= 1)) {
            setScale(1);
            setMarginTop(0);
        }
    };

    return (
        <div className='view-cv'>
            <Button
                style={{ display: buttonsState ? 'none' : 'block' }}
                onClick={showCvWindow}
                text='Visualizar CV'
            />
            {
                (cvFileWindow) &&
                (<div className='cv-image-window-container'>
                    <div className='zoom-out-icon-container'>
                        <ZoomOut
                            onClick={zoomOut}
                            color='white'
                            height='67%'
                            width='67%'
                        />
                    </div>
                    <Image
                        image={cvImage}
                        style={{
                            transform: `scale(${scale})`,
                            marginTop: `${marginTop}vh`,
                            marginBottom: `${(marginTop === 120) ? 26 : 0}vh`,
                            height: imageHeight,
                            width: imageWidth
                        }}
                        alt='AYCP Developer CV'
                    />
                    <div className='zoom-in-icon-container'>
                        <ZoomIn
                            onClick={zoomIn}
                            color='white'
                            height='67%'
                            width='67%'
                        />
                    </div>
                    <div className='x-icon-container'>
                        <X
                            onClick={hideCvWindow}
                            color='white'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>)
            }
        </div>
    );

};

ViewCV.propTypes = {
    imageHeight: PropTypes.string.isRequired,
    imageWidth: PropTypes.string.isRequired
};

export default ViewCV;