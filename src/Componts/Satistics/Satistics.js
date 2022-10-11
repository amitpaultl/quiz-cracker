import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from '../Main/Main';

const Satistics = () => {
    const rechart = useContext(DataContext)
    const { name, total } = rechart
    return (
        <div className='container my-5'>
            <AreaChart width={400} height={400} data={rechart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey={'total'} fill="#8884d8"  stroke="#ffc658" fillOpacity={0.4}></Area>
            </AreaChart>
        </div>
    );
};

export default Satistics;