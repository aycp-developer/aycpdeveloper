import React from 'react';
import './WordChanger.css';

const WordChanger = () => {

    return (
        <div className='word-changer'>
            <div className='loader'>
                <span className='developer'>Desarrollador</span>
                <div className='div2'>
                    <div className='words'>
                        <span className='word'>
                            FullStack
                            <span className='end-exclamation'>!</span>
                        </span>
                        <span className='word'>
                            Frontend
                            <span className='end-exclamation'>!</span>
                        </span>
                        <span className='word'>
                            Backend
                            <span className='end-exclamation'>!</span>
                        </span>
                        <span className='word'>
                            Guapo
                            <span className='end-exclamation'>!</span>
                        </span>
                        <span className='word'>
                            FullStack
                            <span className='end-exclamation'>!</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordChanger;