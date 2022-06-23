

import React from 'react';
import Playlist from '../hook/Playlist';
import TitleApp from '../hook/TitleApp';

const AlbumOfSinger = () => {
    return (
        <>
           <TitleApp title={'Album'} view={'/nghe-si'}/>
           <div className='album-of-singer'>
               <Playlist/>
               <Playlist/>
               <Playlist/>
               <Playlist/>
           </div>
        </>
    );
}

export default AlbumOfSinger;
