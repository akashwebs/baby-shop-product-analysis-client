import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='shadow-lg p-4 rounded-lg'>
                <h2 className='text-3xl mb-3'>What is the context API?</h2>
                <p className=''>Context api using for props alaernative. its work like global variable.when a parant component to many child  component needed same data from parent component, this time easely trasfer data data using context api.The Context API can be used to share data with multiple components, without having to pass data through props manually.Context is designed to share data that can be considered “global” for a tree of React components. </p>
            </div>
            <div className='shadow-lg p-4 rounded-lg'>
                <h2 className='text-3xl mb-3'>What is Semantic tag?</h2>
                <p className=''>Semantic tag are html element. Semantic tag human understanding tag. its clearly discrive there meaning . like: header, footer, main, article, details, summary . when use those tag, macine and human understand easly and semantic tag seo friendly.Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.   </p>
            </div>
            <div className='shadow-lg p-4 rounded-lg'>
                <h2 className='text-3xl mb-3'>what is the difference between block and inline-block?</h2>
                <p>
                    <strong>Block</strong>: html tag have inline and block element. block element occupies full width.when we need any inline element converted to block element then we can change with css property. block element ex: p, div, h1-h2 etc.. block element occupied full width.
                </p>
                <br></br>
                <p>
                    <strong>inline-block</strong>: inline-block element occupies with content width .when we apply margin padding in inline element and want in one line then use inline-block. its behavirour like block but its not occupied full width , its occupies only content width.
                </p>
            </div>
        </div>
    );
};

export default Blogs;