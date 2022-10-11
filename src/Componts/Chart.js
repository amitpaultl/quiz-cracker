import React from 'react';
import { Tooltip } from 'react-bootstrap';
import { LineChart, Line, YAxis, Legend, XAxis } from 'recharts';
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
];
const Chart = () => {
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
          <Tooltip />
          <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Chart;