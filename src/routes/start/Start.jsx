import React from 'react';
import './Start.css';
import { WordChanger, DynamicText, ViewCV, DownloadCV, GetToKnowMe } from '../../exports/exports.js';

const Start = () => {

    return (
        <div className='start'>
            <div className='titles-container'>
                <div className='get-to-know-me-title-container'>
                    <h1 className='get-to-know-me-title'>
                        ¡Hola, me llamo Alexander Yosimar y soy un excelente
                        <WordChanger />
                    </h1>
                </div>
                <span className='art-science-subtitle'>
                    <DynamicText
                        strings='Programar está más cerca de ser un arte que una ciencia.'
                        autoStart={true}
                        loop={true}
                        delay={60}
                        deleteSpeed={20}
                    />
                </span>
            </div>
            <div className='buttons-container'>
                <ViewCV imageHeight='30.5rem' imageWidth='17.5rem' />
                <GetToKnowMe imageHeight='28.2rem' imageWidth='20.7rem' />
                <DownloadCV />
            </div>
        </div>
    );

};

export default Start;