import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QutzeAll from '../QutzeAll/QutzeAll';
const Quize = () => {
    const quezi = useLoaderData();
    const {questions ,name} = quezi.data;
    return (
        <div className='quize-map'>
            <h2>{name}</h2>
            {
                questions.map( quezis => <QutzeAll 
                key={quezis.id}
                quezis={quezis}
                ></QutzeAll>)
            }
        </div>
    );
};

export default Quize;