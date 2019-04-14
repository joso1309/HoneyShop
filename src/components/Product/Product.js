import React from 'react'
import './Product.css'
import Wrap from '../../hoc/Wrap/Wrap'

const Product = (props) => (
    <Wrap>
        <div className="Product" onClick={props.clicked}>
            <div>
                <div className="Med1"></div>
            </div>
            <div className="Title">
                <h2>{props.title}</h2>
            </div>
        </div>
    </Wrap>
)

export default Product
