import React from 'react'
import './Product.css'
import Wrap from '../../hoc/Wrap/Wrap'

const Product = (props) => (
    <Wrap>
        <div className="Product">
            <h2>{props.title}</h2>
            <div className="Info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum sapien quam.</p>
            </div>
        </div>
    </Wrap>
)

export default Product
