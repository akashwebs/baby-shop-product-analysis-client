import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const ChartBar = ({chart}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chart}
        >
          <XAxis dataKey={"month"} />
          <YAxis dataKey={'investment'}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
};

export default ChartBar;