import React from 'react'
import './ProductElement.css'
import Product from '../Product/Product';
import Button from '../Button/Button';
import Wrap from '../../hoc/Wrap/Wrap'

const ProductElement = (props) => (
    <Wrap>
        <div className="ProductElement">
            <Product title={props.title} clicked={props.clicked} price={props.price}></Product>
            <Button></Button>
        </div>
    </Wrap>
)

export default ProductElement