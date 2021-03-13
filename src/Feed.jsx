import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

export default function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic={''}
                message={''}
                timestamp={''}
                username={''}
                image={''}
            />
        </div>
    )
}
