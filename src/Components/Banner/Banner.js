import React from 'react';


const Banner = () => {
    return (
        <div>
            <div className='flex-col-reverse md:flex flex md:flex-row p-2 items-center'>
                <div className='w-full md:w-3/5'>
                    <h2 className='text-6xl font-bold font-sans uppercase text-[#E83A59]'>Toys for our lovely angel  </h2>
                    <p className='text-xl my-6'>Baby shop aspires to be the largest online based store for all things baby related in Bangladesh, like a one stop baby shop for your little one with not one but numerous brands in a variety of ranges.</p>
                    <button className='py-2 text-white text-xl rounded px-8 bg-[#E83A59] mt-5'>Live demo</button>
                </div>
                <div className='w-full md:w-2/5'>
                    <img className='w-full' src={`https://i.ibb.co/0Dy2HBR/banner.jpg`} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;