import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';
import { toast, ToastContainer } from 'react-toastify';
import './QutzeAll.css'
import 'react-toastify/dist/ReactToastify.css';

const QutzeAll = ({quezis }) => {
    const  {question,options,correctAnswer, id} = quezis;
   
    const tost = (text) => {
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
        <div className='queze-area'>
            <div className="catagorey d-flex justify-content-between">
            <h4>{question}</h4>
            <FontAwesomeIcon onClick={corraded}  icon={faEye}></FontAwesomeIcon>
            </div>
            <div className="option-area">
                {
                    options.map((option, idx) => <Option
                    key={idx}
                    option={option}
                    id={idx}
                    common={id}
                    tost={tost}
                    ></Option>)
                }
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default QutzeAll;