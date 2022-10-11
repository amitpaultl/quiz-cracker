import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footers from '../Footer/Footers';
import Header from '../Header/Header';

import './Error.css'

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <Header></Header>
            <div className="error-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="erroe-pag d-flex align-items-center">
                                <div className="text-center w-100">

                                    <h2 className='error'>404</h2>
                                    <p className='error-name'>
                                        <i>{error.statusText || error.message}</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footers></Footers>
        </div>
    );
};

export default Error;