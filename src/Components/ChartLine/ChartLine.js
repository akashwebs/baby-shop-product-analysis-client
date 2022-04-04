import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const ChartLine = ({ chart }) => {
    return (
        <div>
            <LineChart width={500} height={400} data={chart}>
                <XAxis stroke="#120E43" dataKey={'month'}></XAxis>
                <YAxis stroke="#120E43" dataKey={'investment'}></YAxis>
                <Line type='monotone' stroke="#FFF" dataKey={'revenue'}></Line>
                <Line type="monotone" dataKey={'investment'} stroke="#120E43" activeDot={{ r: 8 }} />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default ChartLine;