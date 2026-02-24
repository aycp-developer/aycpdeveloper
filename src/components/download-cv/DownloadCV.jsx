import React, { useContext } from 'react';
import './DownloadCV.css';
import { ButtonsContext, Button } from '../../exports/exports';
import { saveAs } from 'file-saver';
import { cvImage } from '../../assets/assets';

const DownloadCV = () => {

    const context = useContext(ButtonsContext);
    const buttonsState = context.buttonsState.buttonsState;

    const downloadCv = () => {
        saveAs(cvImage, 'aycpdeveloper-cv.jpg');
    };

    return (
        <div className='download-cv' style={{ display: buttonsState ? 'none' : 'block' }}>
            <Button
                onClick={downloadCv}
                text='Descargar CV'
            />
        </div>
    );
};

export default DownloadCV;