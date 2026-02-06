import React, { useReducer } from 'react';
import './Start.css';
import { ButtonsContext, WordChanger, DynamicText, ViewCV, DownloadCV, GetToKnowMe } from '../../exports/exports.js';

const Start = () => {

    const initialButtonsState = { buttonsState: false };

    const buttons = (state, action) => {
        switch (action.type) {
            case 'hide': return { buttonsState: action.payload.buttons };
            case 'show': return { buttonsState: action.payload.buttons };
            default: return state;
        }
    };

    const [buttonsState, buttonsDispatch] = useReducer(buttons, initialButtonsState);

    return (
        <ButtonsContext.Provider value={{ buttonsState, buttonsDispatch }}>
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
                            loop={false}
                            delay={40}
                        />
                    </span>
                </div>
                <div className='buttons-container'>
                    <ViewCV height='30rem' width='17rem' />
                    <GetToKnowMe height='28rem' width='20.5rem' />
                    <DownloadCV />
                </div>
            </div>
        </ButtonsContext.Provider>
    );

};

export default Start;