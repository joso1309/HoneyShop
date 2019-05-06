import React from 'react'
import './BasketListItem.css'
import SmallButton from '../SmallButton/SmallButton';

const BasketListItem = (props) => {

    return (
        <div className='BasketListItem'>
            <table>
                <tbody>
                    <tr>
                        <td className='Img'>
                            <div className='Img1'></div>
                        </td>
                        <td>
                            <div>{props.productName}</div>
                            <div><SmallButton text='-' change={props.decrease} />  {props.amount}  <SmallButton text='+' change={props.increase} /></div>
                            <div>{props.amount * props.price} kn</div>
                        </td>
                    </tr>
                </tbody>
            </table >
        </div>
    )
}

export default BasketListItem