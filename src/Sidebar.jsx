import React, {useEffect} from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import {useStateValue} from './StateProvider';


export default function Sidebar() {
    const [{user}, dispatch]=useStateValue();
    useEffect(()=>{
        dispatch(user)
    });
    
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow title='Friends'/>
            <SidebarRow title='Messenger'/>
            <SidebarRow title='MarketPlace'/>
            <SidebarRow title='Videos'/>  
        </div>
    )
}
