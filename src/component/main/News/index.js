


import React from 'react';
import Post from '../hook/Post';
import './news.css'
const News = () => {
    return (

        <>
        
        <div></div>
        <div className='news-page'>
            <div className='post-item'>
                <Post/>
            </div>
            <div className='post-item'>
                <Post/>
            </div>
            <div className='post-item'>
                <Post/>
            </div>
            <div className='post-item'>
                <Post/>
            </div>
        </div>
        </>
    );
}

export default News;
