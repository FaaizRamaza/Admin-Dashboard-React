import React from 'react'
import {NotificationsNone, Language, Settings, ChatBubble} from '@mui/icons-material'
import './topnav.css'

export default function TopNav() {
  return (
    <div className='topnavContainer'>
        <div className='topnavWrapper'>
            <div className='topLeft'>
                <span className='logo'>AdminDash</span>
            </div>
            <div className='topRight'>
                <div className='topnavItemContainer'>
                    <NotificationsNone className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topnavItemContainer'>
                    <Language className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topnavItemContainer'>
                    <Settings className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topnavItemContainer'>
                    <ChatBubble className='topnavIcon'/>
                    <span className='topIconBadge'>2</span>
                </div>
                <img src='https://thumbs.dreamstime.com/b/gorgeous-happy-person-stands-poses-camera-holds-hand-fist-have-joy-excited-isolated-gorgeous-130188313.jpg' alt='internet issue' className='adminImg' />
            </div>
        </div>
    </div>
  )
}
