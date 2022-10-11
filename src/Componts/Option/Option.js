import React from 'react';
import './Option.css'
const Option = ({option, id,common, tost}) => {
    
    return (
        <div  className='option-ans d-flex'>
            <input onClick={()=>tost(option)} type="radio" id={id+common} name={common} value={option}/>
            <label htmlFor={id+common}>{option}</label>
            
        </div>
    );
};

export default Option;