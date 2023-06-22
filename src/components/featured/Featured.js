import React from 'react'
import { ArrowDownward, KeyboardArrowUp, TrendingUp, ArrowUpward } from '@mui/icons-material'
import './featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$31000</span>
                <span className='featuredMoneyRate'>-12.4
                <KeyboardArrowUp className='featuredIcon' />
                </span>
            </div>
            <span className='featuredSub'>compare to last sales</span>
        </div>


        <div className='featuredItemB'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$42123</span>
                <span className='featuredMoneyRate'>-32.4
                <TrendingUp className='featuredIcon' />
                </span>
            </div>
            <span className='featuredSub'>compare to last sales</span>
        </div>


        <div className='featuredItemC'>
            <span className='featuredTitle'>Return</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$23123</span>
                <span className='featuredMoneyRate'>-11.5
                <ArrowDownward className='featuredIcon negative' />
                </span>
            </div>
            <span className='featuredSub'>compare to last sales</span>
        </div>


        <div className='featuredItemD'>
            <span className='featuredTitle'>Profit</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$131000</span>
                <span className='featuredMoneyRate'>-12.4
                <ArrowUpward className='featuredIcon positive' />
                </span>
            </div>
            <span className='featuredSub'>compare to last sales</span>
        </div>
    </div>
  )
}
