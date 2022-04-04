import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews]=useReviews();
    const {pathname}=useLocation();
    let mainRieves;
    const navigate=useNavigate();
   
        if(pathname.includes('reviews')){
        
            mainRieves=[...reviews];
            
        }else if(pathname.includes('/')){
            mainRieves=[...reviews.slice(0,3)];
        }
    
    
    return (
        <div className='mb-12'>
            <h3 className='text-5xl uppercase font-bold text-center my-5' style={pathname.includes('reviews')? {display:'none'}: {display:'block'}}>Reviews</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {

                    mainRieves.map(review=><Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
            <div className='text-center' style={pathname.includes('reviews') ? {display:'none'} : {display:'block'}}>
            <button onClick={()=>navigate('/reviews')} className='px-10 py-2 rounded-lg  bg-[#120E43] text-xl text-white mt-8 '>See All Reviews</button>
            </div>
        </div>
    );
};

export default Reviews;