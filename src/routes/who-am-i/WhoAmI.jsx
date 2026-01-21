import React from 'react';
import './WhoAmI.css';
import { DynamicText } from '../../exports/exports';
import { Quote } from 'react-bootstrap-icons';

const WhoAmI = () => {

    const whoAmIParagraph = `Autodidacta, cortés y muy entusiasta por aprender.
                Estoy interesado en las Ciencias de la Computación y todo lo que gira en su órbita.
                Me siento fascinado con todo lo que engloba la programación web y el desarrollo de aplicaciones,
                como esta área complementa mis estudios, estoy ansioso por adquirir más experiencia en este campo.
                Por esta razón estoy buscando una compañía dispuesta a ofrecerme una ubicación entre sus desarrolladores,
                a cambio ofrecería mi todo compromiso y sería una adición agradable y amigable para su equipo.
                Por lo tanto, actualmente estoy en busca de un puesto como desarrollador Frontend, Backend o FullStack.`;

    return (
        <div className='who-am-i'>
            <span className='get-to-know-me-subtitle'>
                <DynamicText
                    strings='CONÓCEME'
                    autoStart={true}
                    loop={true}
                    delay={70}
                    deleteSpeed={50}
                />
            </span>
            <h2 className='who-am-i-title'>
                ¿Quién soy?
            </h2>
            <p className={'who-am-i-paragraph'}>
                <Quote />
                {whoAmIParagraph}
                <Quote style={{ transform: 'rotate(180deg)' }} />
            </p>
        </div>
    );

};

export default WhoAmI;