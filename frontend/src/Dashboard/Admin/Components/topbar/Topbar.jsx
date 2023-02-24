import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import img1 from '../../../../images/Profile.png';



export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <p className="logo">Admin</p>
            </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                 <NotificationsIcon />
                 <p className="topIconBadge">2</p>
            </div>
             <div className="topbarIconContainer">
                 <LanguageIcon />
                 <p className="topIconBadge">3</p>
            </div>
            <div className="topbarIconContainer">
                 <SettingsIcon />
            </div>
            <img src= {img1}  className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
