

import React from 'react';
import SongCard from '../hook/SongCard';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './singer.css'
import SongOfSinger from './SongOfSinger';
import AlbumOfSinger from './AlbumOfSinger';
import MvOfSinger from './MvOfSinger';
import PlaylistJoin from './PlaylistJoin';



const Singer = () => {
    const {name} = useParams()
    const [artist,setAtist]=React.useState({})
    const [songsOfArt,setSongsOfArt]=React.useState([])
    const [latestSong,setLatestSong]=React.useState()
    React.useEffect(()=>{
          axios.get("artist/"+name)
               .then(data=>{
                   setAtist(data.data.artist)
                   const songs=data.data.songs
                   const songSort=songs.sort((a, b) => (a.realease > b.realease) ? 1 : -1)
                   setSongsOfArt(
                        songSort.map(song=>{
                            return {...song,mainArtist:[data.data.artist]}
                        })
                   )
                   setLatestSong({...songs[0],mainArtist:[data.data.artist]})
               })
              
    },[name])
    return (
        <>
            <div className='artist-hero'>
                <div className='artist-info'>
                    <h2 className='artist-info-name'>{artist.artistName}</h2>
                    <div className='artist-biography'>
                       {artist.biography}
                    </div>
                    <div className='artist-btn'>
                        <button className='btn btn-primary'>Phát nhạc</button>
                        <button className='btn btn-primary'>Quan Tâm {artist.follower}</button>
                    </div>
                    <div className='artist-lastSong'>
                        {latestSong&&<SongCard song={latestSong} />}
                    </div>
                </div>
                <div className='artist-image'>
                    <img src={artist.avatar} alt="" />
                </div>
            </div>
            <SongOfSinger SongOfSinger={songsOfArt} mainArt={artist}/>
            <AlbumOfSinger/>
            <MvOfSinger/>
            <PlaylistJoin playlists={songsOfArt}/>
        </>

    );
}

export default Singer;
