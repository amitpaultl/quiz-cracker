import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footers from '../Footer/Footers';
import Header from '../Header/Header';
export const DataContext = createContext([])

const Main = () => {
    const item = useLoaderData();
    const round = item.data
    return (
        
            <DataContext.Provider value={round}>
                <Header></Header>
                <Outlet></Outlet>
                <Footers></Footers>
            </DataContext.Provider>

       
    );
};

export default Main;