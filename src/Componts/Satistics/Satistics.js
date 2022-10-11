import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from '../Main/Main';

const Satistics = () => {
    const rechart = useContext(DataContext)
    const { name, total } = rechart
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-4 col-md- 6  offset-lg-4 text-center">
                    <ResponsiveContainer width="100%" height={400}>

                        <AreaChart data={rechart}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey={'total'} fill="#8884d8" stroke="#ffc658" fillOpacity={0.4}></Area>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
};

export default Satistics;