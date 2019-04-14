import React from 'react'
import './ProductDescription.css'

const ProductDescription = (props) => (
    <div className="ProductDescription">
        <p>
            {props.text}
        </p>
    </div>
)

export default ProductDescription