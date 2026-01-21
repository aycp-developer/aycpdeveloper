import React from 'react';
import { Navbar, Start, WhoAmI, TechStack, Technologies, Footer } from '../../exports/exports';

const Root = () => {

    return (
        <div className='root'>
            <Navbar />
            <Start />
            <WhoAmI />
            <TechStack />
            <Technologies />
            <Footer />
        </div>
    );

};

export default Root;