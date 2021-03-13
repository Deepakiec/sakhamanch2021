import React from 'react';
import {Avatar} from '@material-ui/core';

import './Story.css';
function Story({image, profileSrc, title}){
return (
<div style={{ 
      backgroundImage: `url(${image})` 
    }} className='story'>
<Avatar className='story__avtar' src={profileSrc}/>

</div>
);

}

export default Story;