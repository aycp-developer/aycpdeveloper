import React, { lazy, Suspense, useReducer } from 'react';
import { ButtonsContext, Navbar, Loading, ScrollToTop } from '../../exports/exports';

const Start = lazy(() => import('../start/Start'));
const WhoAmI = lazy(() => import('../who-am-i/WhoAmI'));
const TechStack = lazy(() => import('../tech-stack/TechStack'));
const Technologies = lazy(() => import('../technologies/Technologies'));
const Coding = lazy(() => import('../coding/Coding'));
const Footer = lazy(() => import('../../components/footer/Footer'));

const Root = () => {

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
        </ButtonsContext.Provider>
    );

};

export default Root;