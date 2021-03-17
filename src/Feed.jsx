import React, {useState, useEffect} from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';
import db from './firebase';
import { SettingsInputCompositeSharp } from '@material-ui/icons';

export default function Feed() {
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
    setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
})
    }, [])
    return (<div className='feed'>
            <StoryReel/>
            <MessageSender/>
           
            {posts.map((post)=>{
               
                return (
                     <Post
                    message={post.data.message}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    image={post.data.image}
                    timestamp={post.data.timestamp}
                    
                     />)
                       
              
            })}
           
            
        </div>
    )
}
