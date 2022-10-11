import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';

const QutzeAll = ({quezis}) => {
    const  {question,options,correctAnswer, id} = quezis;
    return (
        <div>
            <h4>{question}</h4>
            <FontAwesomeIcon  icon={faCoffee}></FontAwesomeIcon>
            <div className="option-area">
                {
                    options.map((option, idx) => <Option
                    key={idx}
                    option={option}
                    id={idx}
                    common={id}
                    ></Option>)
                }
            </div>
            
        </div>
    );
};

export default QutzeAll;