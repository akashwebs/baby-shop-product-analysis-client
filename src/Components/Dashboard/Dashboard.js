import React, { useEffect, useState, PureComponent } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartArea from '../ChartArea/ChartArea';
import ChartBar from '../ChartBar/ChartBar';
import ChartLine from '../ChartLine/ChartLine';

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('chartInfo.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, []);

    return (

        <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div className='bg-blue-100 p-8 rounded-lg'>
                <ChartLine chart={chartData}></ChartLine>
            </div>
            <div className='bg-blue-100 p-8 rounded-lg'>
                <ChartArea chart={chartData}></ChartArea>
            </div>
            <div className='bg-blue-100 p-8 rounded-lg'>
                <ChartBar chart={chartData}></ChartBar>
            </div>
            <div className='bg-blue-100 p-8 rounded-lg'>
                <ChartLine chart={chartData}></ChartLine>
            </div>
        </div>

    );
};

export default Dashboard;