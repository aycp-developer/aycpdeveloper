import React, { useState } from 'react';
import './Coding.css';
import { DynamicText } from '../../exports/exports';
import { coding, algorithms } from '../../assets/assets';

const Coding = () => {

    const [isVideoSelected, setIsVideoSelected] = useState(false);

    function setCodingColorText(text) { return <span style={{ color: (!isVideoSelected) ? '#62AEC2' : 'white' }}>{text}</span>; }

    function setAlgorithmsColorText(text) { return <span style={{ color: (isVideoSelected) ? '#62AEC2' : 'white' }}>{text}</span>; }

    return (
        <div className='coding'>
            <span className='focus-subtitle'>
                <DynamicText
                    strings='ENFOQUE'
                    autoStart={true}
                    loop={true}
                    delay={70}
                    deleteSpeed={50}
                />
            </span>
            <h2 className='coding-title'>
                Codificando
            </h2>
            <p className='coding-paragraph'>
                Un día normal como programador es {setCodingColorText('codificar')} y escribir {setAlgorithmsColorText('algoritmos')} o en modo inverso.
            </p>
            <div className='div'>
                <div className='coding-algorithms-videos'>
                    <video
                        className='coding'
                        style={{
                            position: (!isVideoSelected) ? 'absolute' : 'relative',
                            opacity: (!isVideoSelected) ? '1' : '0.5',
                            zIndex: (!isVideoSelected) ? '2' : '1'
                        }}
                        onClick={() => setIsVideoSelected(false)}
                        autoPlay loop muted
                    >
                        <source src={coding} type="video/mp4" />
                    </video>
                    <video
                        className='algorithms'
                        style={{
                            position: (isVideoSelected) ? 'absolute' : 'relative',
                            opacity: (isVideoSelected) ? '1' : '0.5',
                            zIndex: (isVideoSelected) ? '2' : '1'
                        }}
                        onClick={() => setIsVideoSelected(true)}
                        autoPlay loop muted
                    >
                        <source src={algorithms} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Coding;