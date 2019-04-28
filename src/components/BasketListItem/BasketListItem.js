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
                            <div className=''></div>
                        </td>
                        <td>
                            <div>{props.productName}</div>
                            <div><SmallButton text='-' />  {props.amount}  <SmallButton text='+' /></div>
                            <div>{props.amount * props.price} kn</div>
                        </td>
                    </tr>
                </tbody>
            </table >
        </div>
    )
}

export default BasketListItem