import React from 'react';
import './Whatsapp.css';
import { Whatsapp as WhatsappIcon } from 'react-bootstrap-icons';

const Whatsapp = () => {

    return (
        <a
            className='whatsapp'
            href='https://wa.me/5533845872?text=hola'
            target='_blank'
            rel="noreferrer"
        >
            <WhatsappIcon height='100%' width='100%' />
        </a>
    );

};

export default Whatsapp;