import { faCoffee ,faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Language.css'

const Language = ({language}) => {
    const {logo,name}=language
    console.log(language);
    return (
        <div className='single-language'>
            <div className="language-img">
                <img src={logo} alt="" />
                
            </div>
            <div className="d-flex justify-content-between mt-4 language-info">
                <h2>{name}</h2>
                <button>More info <FontAwesomeIcon icon={faChevronCircleRight} /></button>
            </div>
        </div>
    );
};

export default Language;