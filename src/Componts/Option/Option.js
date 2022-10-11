import React from 'react';

const Option = ({option, id,common, notify}) => {
    
    return (
        <div onClick={()=>notify(option)}>
            <input type="radio" id={id+common} name={common} value={option}/>
            <label htmlFor={id+common}>{option}</label>
            
        </div>
    );
};

export default Option;