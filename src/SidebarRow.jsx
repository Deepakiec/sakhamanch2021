import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

export default function SidebarRow({src, Icon, title}) {
    console.log(src);
    console.log(title);
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <p>{title}</p>
        </div>
    )
}
