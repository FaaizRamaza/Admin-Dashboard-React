import React from 'react'
import './orderWidget.css'

export default function OrderWidget() {
    const Button = ({type})=> {
        return <button className={'orderButton ' + type}>{type}</button>
    }
  return (
    <div className='orderContainer'>
        <h3 className='orderTitle'>Latest Transaction</h3>
        <table className='orderTable'>
            <tr className='orderTr'>
                <th className='orderTh'>Customer</th>
                <th className='orderTh'>Date</th>
                <th className='orderTh'>Product</th>
                <th className='orderTh'>Amount</th>
                <th className='orderTh'>Location</th>
                <th className='orderTh'>Status</th>
            </tr>


            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src='images/productsImg/earphone.jpg' alt='internet issues' className='orderImg'/>
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 Jan 2023</td>
                <td className='orderName'>Samsung Earphone</td>
                <td className='orderAmount'>$404</td>
                <td className='orderLocation'>USA</td>
                <td className='orderStatus'><Button type='Approved'/></td>
            </tr>


            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src='images/productsImg/jacket.jpg' alt='internet issues' className='orderImg'/>
                    <span className='orderName'>Jacket</span>
                </td>
                <td className='orderDate'>4 Jan 2023</td>
                <td className='orderName'>Gucci</td>
                <td className='orderAmount'>$304</td>
                <td className='orderLocation'>UK</td>
                <td className='orderStatus'><Button type='Cancel'/></td>
            </tr>

            
            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src='images/productsImg/earphone.jpg' alt='internet issues' className='orderImg'/>
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 Jan 2023</td>
                <td className='orderName'>Samsung Earphone</td>
                <td className='orderAmount'>$404</td>
                <td className='orderLocation'>USA</td>
                <td className='orderStatus'><Button type='Pending'/></td>
            </tr>


            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src='images/productsImg/earphone.jpg' alt='internet issues' className='orderImg'/>
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 Jan 2023</td>
                <td className='orderName'>Samsung Earphone</td>
                <td className='orderAmount'>$404</td>
                <td className='orderLocation'>USA</td>
                <td className='orderStatus'><Button type='Pending'/></td>
            </tr>


            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src='images/productsImg/earphone.jpg' alt='internet issues' className='orderImg'/>
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 Jan 2023</td>
                <td className='orderName'>Samsung Earphone</td>
                <td className='orderAmount'>$404</td>
                <td className='orderLocation'>USA</td>
                <td className='orderStatus'><Button type='Cancel'/></td>
            </tr>


            <tr className='orderTr'>
                <td className='orderUser'>
                    <img src='images/productsImg/earphone.jpg' alt='internet issues' className='orderImg'/>
                    <span className='orderName'>earphone</span>
                </td>
                <td className='orderDate'>4 Jan 2023</td>
                <td className='orderName'>Samsung Earphone</td>
                <td className='orderAmount'>$404</td>
                <td className='orderLocation'>USA</td>
                <td className='orderStatus'><Button type='Approved'/></td>
            </tr>
        </table>
    </div>
  )
}
