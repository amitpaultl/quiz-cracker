import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Language from '../Language/Language';
import './Topice.css'

const Topice = () => {
    const route = useLoaderData();
    const data = route.data;

    console.log(data);

   

    return (
        <div className='container'>
            <div className="hero-area">
                <img src="https://t4.ftcdn.net/jpg/02/78/37/47/360_F_278374738_ypRn0utOVnebuhmpSrDiwkzFsdqEm0aa.jpg" alt="" />
            </div>
            <div className="progming-langaus">
                {
                    data.map(language => <Language 
                    key={language.id}
                    language={language}
                    ></Language>)
                }
            </div>
        </div>
    );
};

export default Topice;