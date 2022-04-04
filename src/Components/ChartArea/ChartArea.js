import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartArea = ({chart}) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
         <AreaChart width={500} height={400}data={chart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey={'investment'}/>
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        </ResponsiveContainer>
        </div>
    );
};

export default ChartArea;