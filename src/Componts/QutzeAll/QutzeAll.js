import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QutzeAll = ({quezis}) => {
    const  {question,options,correctAnswer, id} = quezis;
    const notify = (text) => {
        if(correctAnswer === text ){
           toast.success("You are Right!",{autoClose:1000})
            
        }else{
            toast.error("Your Ans false!",{autoClose:1000})
        }
        
    };
    const corraded = ()=>{
        toast.success(correctAnswer,{autoClose:5000})
    }
    return (
        <div>
            <h4>{question}</h4>
            <FontAwesomeIcon onClick={corraded}  icon={faCoffee}></FontAwesomeIcon>
            <div className="option-area">
                {
                    options.map((option, idx) => <Option
                    key={idx}
                    option={option}
                    id={idx}
                    common={id}
                    notify={notify}
                    ></Option>)
                }
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default QutzeAll;