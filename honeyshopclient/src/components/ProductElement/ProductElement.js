import React from 'react'
import './ProductElement.css'
import Product from '../Product/Product';
import Button from '../Button/Button';
import Wrap from '../../hoc/Wrap/Wrap'

const ProductElement = (props) => {
    const button = !props.inBasket ? <Button text='Dodaj u košaricu'
        clicked={props.addedToBasket}
    ></Button> : null

    return (
        <Wrap>
            <div className="ProductElement">
                <Product title={props.title} clicked={props.clicked} price={props.price}></Product>
                {button}
            </div>
        </Wrap>
    )
}

export default ProductElement