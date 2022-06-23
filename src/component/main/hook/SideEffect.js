import React, { memo } from 'react';
import { userContext } from '../../context/UserProvider';
import { songContext } from '../../context/SongProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToastApp = (method, message) => {
    const notify = () => {
        switch (method) {
            case 'success':
                toast.success(message);
                break;
            case 'error':
                toast.error(message);
                break;
            case 'warning':
                toast.warn(message);
                break;
            case 'info':
                toast.info(message);
                break;

            default:
                toast("Thông báo từ ứng trình phát nhạc");
                break;
        }
    };

    notify()
    return (
        'chào bạn'
    )
}
const HandleChangeFavoriteSong = async (songId, status, loginSt = false, user) => {
       let newSongs=[]
    if (loginSt === true) {
        let favoriteSongs = user.favoriteSongs
        if (favoriteSongs.includes(songId) === false) {
            favoriteSongs.push(songId)
            newSongs = await axios.put('http://localhost:3001/api/user/update',
                { songs: favoriteSongs })
                .then((res) => {
                    res.data.acknowledged === true ? ToastApp('success', 'Đã thêm bài hát vào thư viện') : console.log('Thêm bài hát thất bại')
                    return favoriteSongs
                })
        }
        else {
            let newFS = favoriteSongs.filter(song => {
                return song !== songId
            })
            newSongs = await axios.put('http://localhost:3001/api/user/update',
                { songs: newFS })
                .then((res) => {
                    res.data.acknowledged === true ? ToastApp('success', 'Đã xóa bài hát khỏi thư viên') : console.log('xóa bài hát thất bại')
                    return newFS
                })
        }
    }
    else {
        ToastApp('error', 'Vui lòng đăng nhập để thực hiện chức năng này!!!')
    }
    return newSongs;
}

export {
    ToastApp,
    HandleChangeFavoriteSong
}
