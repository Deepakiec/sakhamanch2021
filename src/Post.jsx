import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUpSharp } from '@material-ui/icons';
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
                
                {/* <p>{new Date(timestamp ?.toDate().toUTCString())}</p> */}
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image"><img src={image} alt=""/></div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpSharp/>
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                    
                </div>
            </div>
        </div>
    )
}
