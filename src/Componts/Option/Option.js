import React from 'react';

const Option = ({option, id,common}) => {
    return (
        <div>
            <input type="radio" id={id+common} name={common} value={option}/>
            <label htmlFor={id+common}>{option}</label>
            
        </div>
    );
};

export default Option;