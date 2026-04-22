import React from 'react';
// import PropTypes from 'prop-types';
import './Formation.css';
import { DynamicText } from '../../exports/exports';

const Formation = () => {

    return (
        <div className='formation'>
            <span className='campus-subtitle'>
                <DynamicText
                    strings='CAMPUS'
                    autoStart={true}
                    loop={true}
                    delay={70}
                    deleteSpeed={50}
                />
            </span>
            <h2 className='formation-title'>
                Formación
            </h2>
            {/* <p className='formation-paragraph'>
                A lo largo de mi aprendizaje me he formado en distintas plataformas de educación en línea,
                 como son las siguientes:
            </p> */}
        </div>
    );

};

// Formation.propTypes = {};

export default Formation;