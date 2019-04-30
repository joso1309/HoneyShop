import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './Basket.css'
import BasketListItem from '../../components/BasketListItem/BasketListItem';
import SmallButton from '../../components/SmallButton/SmallButton';


export default class Basket extends Component {

    state = {
        items: this.props.products
    }

    changeAmount = (tabId, productId, number) => {

        this.props.products[tabId].products[productId - 1].amount += number

        if (this.props.products[tabId].products[productId - 1].amount === 0) {
            this.props.products[tabId].products[productId - 1].addedToBasket = false
            this.props.products[tabId].products[productId - 1].amount = 1
        }
        this.setState({ items: this.props.products })
    }

    render() {
        console.log(this.props.products);
        let hasItems = null
        let sumPrice = 0

        const listItems = this.state.items.map(category => category.products.map(
            product => {

                if (!hasItems) {
                    hasItems = product.addedToBasket ? true : false
                }

                if (product.addedToBasket) sumPrice += product.productPrice * product.amount

                return product.addedToBasket ? <BasketListItem
                    key={product.productId}
                    productName={product.productTitle}
                    amount={product.amount}
                    increase={() => this.changeAmount(category.tabId, product.productId, 1)}
                    decrease={() => this.changeAmount(category.tabId, product.productId, -1)}
                    price={product.productPrice} /> : null
            }
        ))


        let navigation = (
            <div>
                <br />
                <br />
                <p>Košarica je prazna</p>
                <Link to='/'><SmallButton text='<' /></Link>
            </div>
        )
        if (hasItems) {
            navigation = (
                <div>
                    <h2>Ukupna cijena: {sumPrice}</h2>
                    <Link to='/'><SmallButton text='<' /></Link>
                    <br />
                    <Link to='/podaci' className='Link'>
                        <Button text='Nastavi' clicked={() => this.props.updateProducts(this.state.items)}></Button>
                    </Link>
                </div>
            )
        }

        return (
            <div className='Basket'>
                <div className='Naslov'>
                    <h2>Košarica</h2>

                </div>
                <div>
                    {listItems}
                </div>
                {navigation}
            </div>
        )
    }
}
