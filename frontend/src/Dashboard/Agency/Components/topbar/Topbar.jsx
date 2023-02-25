import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import img1 from '../../../../images/Profile.jpg';



export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Agency</span>
            </div>
            
        
        
        <div className="topRight">
            <div className="topbarIconContainer">
                 <NotificationsIcon />
                 <span className="topIconBadge">2</span>
            </div>
             <div className="topbarIconContainer">
                 <LanguageIcon />
                 <span className="topIconBadge">3</span>
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
