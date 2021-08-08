import React from 'react'
import './Header.css'
import linkedinLogo from './Resources/linkedin.svg';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className='header'>
            <div className="header__left">
                <img src={linkedinLogo} alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption Icon={PowerSettingsNewIcon} title="Logout" onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
