import React, { lazy, Suspense } from 'react';
import { Navbar, Loading, ScrollToTop } from '../../exports/exports';

const Start = lazy(() => import('../start/Start'));
const WhoAmI = lazy(() => import('../who-am-i/WhoAmI'));
const TechStack = lazy(() => import('../tech-stack/TechStack'));
const Technologies = lazy(() => import('../technologies/Technologies'));
const Coding = lazy(() => import('../coding/Coding'));
const Footer = lazy(() => import('../../components/footer/Footer'));

const Root = () => {

    return (
        <div className='root'>
            <Navbar />
            <Suspense fallback={<Loading />}>
                <Start />
                <WhoAmI />
                <TechStack />
                <Coding />
                <Technologies />
                <Footer />
            </Suspense>
            <ScrollToTop />
        </div>
    );

};

export default Root;