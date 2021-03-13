import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow title='Pages'/>
            <SidebarRow title='Friends'/>
            <SidebarRow/>
            <SidebarRow/>
            <SidebarRow/>
        </div>
    )
}
