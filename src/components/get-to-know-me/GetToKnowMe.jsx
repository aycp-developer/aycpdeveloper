import React, { useContext, useState } from 'react';
import './GetToKnowMe.css';
import { ButtonsContext, Button, Image } from '../../exports/exports';
import { profilePicture } from '../../assets/images';
import { X } from 'react-bootstrap-icons';

const GetToKnowMe = () => {

    const context = useContext(ButtonsContext);
    const buttonsState = context.buttonsState.buttonsState;
    const buttonsDispatch = context.buttonsDispatch;

    const [profilePictureWindow, setProfilePictureWindow] = useState(false);

    const hideButtonsDispatcher = () => {
        buttonsDispatch({
            type: 'hide',
            payload: { buttons: true }
        });
    };

    const showButtonsDispatcher = () => {
        buttonsDispatch({
            type: 'show',
            payload: { buttons: false }
        });
    };

    const showProfilePicture = () => {
        hideButtonsDispatcher();
        setProfilePictureWindow(true);
    };

    const hideProfilePicture = () => {
        showButtonsDispatcher();
        setProfilePictureWindow(false);
    };

    return (
        <div className='get-to-know-me'>
            <Button
                style={{ display: buttonsState ? 'none' : 'block' }}
                onClick={showProfilePicture}
                text='Conóceme'
            />
            {(profilePictureWindow) &&
                (<div className='profile-picture-window-container'>
                    <Image image={profilePicture} alt='AYCP Developer' />
                    <div className='x-icon-container'>
                        <X
                            onClick={hideProfilePicture}
                            color='white'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>)}
        </div>
    );
};

export default GetToKnowMe;