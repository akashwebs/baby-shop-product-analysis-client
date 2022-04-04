import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, comment, image, rating } = review;
    return (
        <div className='px-10 py-8 bg-[#120E43] text-white rounded-lg'>
            <div className='review-comment bg-white text-gray-700 text-sm rounded-lg p-8'>
                <p>{comment.slice(0,450)}</p>
            </div>
            <div className='flex  gap-5 items-center'>
                <div className=''>
                <img src={image} alt="" className="w-14 h-14 rounded-full" />
                </div>
                <div className="">
                    <h3 className='text-2xl font-semibold mb-1'>{name}</h3>
                    <p className=''><small>developer</small></p>
                    <p> Rating: {rating}</p>
                </div>
            </div>

        </div>
    );
};

export default Review;