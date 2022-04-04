import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews]=useReviews();
    const {pathname}=useLocation();
    console.log(pathname)
    let mainRieves;
   
        if(pathname.includes('reviews')){
        
            mainRieves=[...reviews];
            
        }else if(pathname.includes('/')){
            mainRieves=[...reviews.slice(0,3)];
        }
    
    
    return (
        <div>
            <h3 className='text-5xl uppercase font-bold text-center my-5'>Reviews</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                {

                    mainRieves.map(review=><Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;