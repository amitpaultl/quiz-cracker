import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footers.css'

const Footers = () => {
    return (
        <div className='footer'>
            <h2>ColorFull.com</h2>
            <a href=""><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></a>
        </div>
    );
};

export default Footers;