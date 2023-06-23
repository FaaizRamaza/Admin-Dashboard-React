import React from 'react'
import './membersWidget.css'
import {Visibility} from '@mui/icons-material'

export default function MembersWidget() {
  return (
    <div className='membersWidgetContainer'>
        <span className='membersWidgetTitle'>Newly Joined Members</span>
        <ul className='membersWidgetList'>

            <li className='membersWidgetItem'>
                <img src='images/members/daisy.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Daisy</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>

            <li className='membersWidgetItem'>
                <img src='images/members/man.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Edward</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>

            <li className='membersWidgetItem'>
                <img src='images/members/mike.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Mike</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>

            <li className='membersWidgetItem'>
                <img src='images/members/tony.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Tony</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>

            <li className='membersWidgetItem'>
                <img src='images/members/admin1.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Carl</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>

            <li className='membersWidgetItem'>
                <img src='images/members/admin1.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Carl</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>
            
            <li className='membersWidgetItem'>
                <img src='images/members/admin1.jpg' alt='internet issue' className='widgetImg'/>
                <div className='memberWidgetUser'>
                    <span className='memberWidgetUsername'>Carl</span>
                    <span className='memberWidgetTitle'>React Dev</span>
                </div>
                <button className='memberWidgetButton'>
                    <Visibility className='memberWidgetIcon' /> Display
                </button>
            </li>

        </ul>
    </div>
  )
}
