import { faCoffee ,faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Language.css'

const Language = ({language}) => {
    const {id, logo,name}=language
    const navigate = useNavigate()
    const handalClick=()=>{
        navigate(`/topice/quezi/${id}`);
    }
    return (
        <div className='single-language'>
            <div className="language-img">
                <img src={logo} alt="" />
                
            </div>
            <div className="d-flex justify-content-between mt-4 language-info">
                <h2>{name}</h2>
                <button onClick={handalClick}>More info <FontAwesomeIcon icon={faChevronCircleRight} /></button>
            </div>
        </div>
    );
};

export default Language;