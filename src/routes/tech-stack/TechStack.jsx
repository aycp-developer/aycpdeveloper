import React, { useState } from 'react';
import './TechStack.css';
import { DynamicText } from '../../exports/exports';
import { frontend, backend } from '../../assets/assets';

const TechStack = () => {

    const [isImageSelected, setIsImageSelected] = useState(false);

    function frontendTechStackColorText(text) { return <span style={{ color: (!isImageSelected) ? '#62AEC2' : 'white' }}>{text}</span>; }

    function backendTechStackColorText(text) { return <span style={{ color: (isImageSelected) ? '#62AEC2' : 'white' }}>{text}</span>; }

    return (
        <div className='tech-stack'>
            <span className='fullstack-subtitle'>
                <DynamicText
                    strings='FULLSTACK'
                    autoStart={true}
                    loop={true}
                    delay={70}
                    deleteSpeed={50}
                />
            </span>
            <h2 className='tech-stack-title'>
                Tech Stack
            </h2>
            <p className='tech-stack-paragraph'>
                Mi pila tecnológica preferida es {frontendTechStackColorText('Frontend')} con {frontendTechStackColorText('ReactJS')} {frontendTechStackColorText('+')} {frontendTechStackColorText('Javascript')} y {backendTechStackColorText('Backend')} con {backendTechStackColorText('SpringBoot')} {backendTechStackColorText('+')} {backendTechStackColorText('Java')}.
            </p>
            <div className='tech-stack-images'>
                <img
                    className='frontend'
                    src={frontend}
                    style={{
                        position: (!isImageSelected) ? 'absolute' : 'relative',
                        opacity: (!isImageSelected) ? '1' : '0.5',
                        border: (!isImageSelected) ? '2px solid #62AEC2' : '2px solid white',
                        zIndex: (!isImageSelected) ? '2' : '1'
                    }}
                    onClick={() => setIsImageSelected(false)}
                />
                <img
                    className='backend'
                    src={backend}
                    style={{
                        position: (isImageSelected) ? 'absolute' : 'relative',
                        opacity: (isImageSelected) ? '1' : '0.5',
                        border: (isImageSelected) ? '2px solid #62AEC2' : '2px solid white',
                        zIndex: (isImageSelected) ? '2' : '1',
                    }}
                    onClick={() => setIsImageSelected(true)}
                />
            </div>
        </div>

    );
};

export default TechStack;