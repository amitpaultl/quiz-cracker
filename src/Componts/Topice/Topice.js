import React, { useContext } from 'react';
import Language from '../Language/Language';
import { DataContext } from '../Main/Main';
import './Topice.css'

const Topice = () => {

    const data = useContext(DataContext)
  

    return (
        <div className='container'>
            <div className="hero-area">
                <h2>My project name: Quiz tracker</h2>
                <p>My project Work: Quiz option add, right wrong show in popup.</p>
            </div>
            <div className="progming-langaus">
                <div className="row">
                    {
                        data.map(language => <Language 
                        key={language.id}
                        language={language}
                        ></Language>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Topice;