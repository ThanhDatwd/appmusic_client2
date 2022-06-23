


import React from 'react';
import Artist from '../hook/Artist';

const FavoriteArtists = ({artist=[]}) => {
    return (
        <div>
            <div className='section-title'>
                <h3>Nghệ sĩ</h3>
            </div>
            <div className='artists'>
                <Artist/>
            </div>
        </div>
    );
}

export default FavoriteArtists;
