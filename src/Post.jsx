import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

export default function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className="post__top">
                <Avatar src={profilePic} className='post__avatar'/>
            </div>
            <div className="post__topinfo">
                <h3>{username}</h3>
                <p>{timestamp}</p>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image"><img src={image} alt=""/></div>
        </div>
    )
}
