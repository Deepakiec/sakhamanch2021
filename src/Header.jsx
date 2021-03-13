import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import { ExpandMore, NotificationsActive, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle, Add} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
export default function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <image className="logo"></image>
                <div className="header__input">
<SearchIcon/>
<input placeholder='search your sakha' type="text"/>

                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize='large'/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize='large'/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize='large'/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize='large'/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle  fontSize='large'/>
                </div>
            </div>
            <div className="header__ right">
                <div className="header__info">
                    <Avatar/>
                    <h4>Deepak Soni</h4>
                    <IconButton><Add/></IconButton>
                    <IconButton></IconButton>
                    <IconButton><NotificationsActive/></IconButton>
                    <IconButton><ExpandMore/></IconButton>
                </div>
            </div>
        </div>
    )
}
