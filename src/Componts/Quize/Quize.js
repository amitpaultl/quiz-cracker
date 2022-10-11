import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QutzeAll from '../QutzeAll/QutzeAll';
import './Quize.css'
const Quize = () => {
    const quezi = useLoaderData();
    const { questions, name } = quezi.data;
    return (
        <div className='quize-map '>
            <div className="container">
                <h2>{name}</h2>
                <div className="row">
                    <div className="col-md-9">
                        <div className="catagorey">
                            {
                                questions.map(quezis => <QutzeAll
                                    key={quezis.id}
                                    quezis={quezis}
                                ></QutzeAll>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="count">
                            <h2>Total Ans</h2>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Quize;