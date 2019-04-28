import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Basket.css'
import BasketListItem from '../../components/BasketListItem/BasketListItem';


export default class Basket extends Component {


    render() {
        console.log(this.props.products);

        const listItems = this.props.products.map(category => category.products.map(
            product => {
                return product.addedToBasket ? <BasketListItem
                    key={product.productId}
                    productName={product.productTitle}
                    amount={product.amount}
                    price={product.productPrice} /> : null
            }
        ))


        return (
            <div className='Basket'>
                <Link to='/'>Natrag</Link>
                <div>
                    {listItems}
                </div>
                <Link to='/podaci' className='Link'>
                    <Button text='Nastavi'></Button>
                </Link>
            </div>
        )
    }
}
