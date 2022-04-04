import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen container px-2'>
            <div className=''>
               
                    <div className=''>
                        <p className='text-6xl'>ERROR 404 NOT FOUND</p>
                        <p>You may have mis-typed the URL.</p>
                        <p>Actually, there is nothing to see here...</p>
                        <p>Click on the links below to do something, Thanks!</p>
                    </div>
                    <div className='mt-5'>
                        <Link className='py-2 px-8 bg-red-700 rounded-lg text-white' to={'/'}>Back To Home</Link>
                    </div>
              
            </div>
        </div>
    );
};

export default NotFound;