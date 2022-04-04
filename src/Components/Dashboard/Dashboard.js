import React, { useEffect, useState } from 'react';
import ChartArea from '../ChartArea/ChartArea';
import ChartBar from '../ChartBar/ChartBar';
import ChartLine from '../ChartLine/ChartLine';
import ChartPie from '../ChartPie/ChartPie';

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
            <ChartPie chart={chartData}></ChartPie>
            </div>
        </div>

    );
};

export default Dashboard;