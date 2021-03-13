import React, {useState} from 'react';
import {Avatar} from '@material-ui/core';
import VideoCall from '@material-ui/icons/VideoCall';
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import EmojiEmotions from '@material-ui/icons/EmojiEmotions';
import './MessageSender.css';


export default function MessageSender() {
const [input , setInput]= useState();
const [imageUrl , setImageUrl]= useState();

const handleSubmit=(e)=>{
e.preventDefault();
setInput("");
setImageUrl("");
}

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input value={input}  onChange={(e)=>setInput(e.target.value)} className='messageSender__input' placeholder='thought'></input>
                    <input value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder='image url optional'/>
                    <button onClick={(e)=>handleSubmit(e)} type='Submit'>Hidden Submit</button>

                </form>
            </div>
            <div className="messageSender__bottom">
<div className="messageSender__option">
    <VideoCall style={{color:'red'}}/>
    <h3>Live Video</h3>
</div>
<div className="messageSender__option">
<PhotoLibrary style={{color:'green'}}/>
    <h3>Photo/Video</h3>
</div>
<div className="messageSender__option">
<EmojiEmotions style={{color:'#f3a42e'}}/>
    <h3>Feelings/Activities</h3>
</div>
            </div>
        </div>
    )
}


