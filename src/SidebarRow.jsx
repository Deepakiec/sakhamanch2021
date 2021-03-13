import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';

export default function SidebarRow({src, Icon, title}) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
        </div>
    )
}
