import React from 'react'
import './home.css'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import DisplayTotal from '../../components/displaytotal/DisplayTotal'
import OrderWidget from '../../components/orderwidget/OrderWidget'

export default function Home() {
  return (
    <div className='homeContainer'>
        <Featured />
        <div className='chartAnalyticWidget'>
            <Chart />
            <DisplayTotal />
        </div>
        <div className='orderAndMemberWidget'>
          <OrderWidget />
        </div>
    </div>
  )
}
