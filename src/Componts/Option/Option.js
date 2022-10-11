import React from 'react';
import './Option.css'
const Option = ({option, id,common, notify}) => {
    
    return (
        <div onClick={()=>notify(option)} className='option-ans d-flex'>
            <input type="radio" id={id+common} name={common} value={option}/>
            <label htmlFor={id+common}>{option}</label>
            
        </div>
    );
};

export default Option;