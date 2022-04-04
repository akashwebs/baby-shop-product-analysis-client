import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const ChartPie = ({chart}) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart width={400} height={400}>
                    <Pie data={chart} dataKey={'revenue'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    
                    <Pie data={chart} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />

                </PieChart>
            </ResponsiveContainer>
            
        </div>
    );
};

export default ChartPie;