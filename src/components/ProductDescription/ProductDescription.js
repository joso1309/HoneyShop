import React from 'react'
import './ProductDescription.css'
import Modal from '@material-ui/core/Modal';

const ProductDescription = (props) => (
    <Modal
        open={props.opened}
        onClose={props.closeDescription}
    >
        <div className="ProductDescription">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    </Modal>
)

export default ProductDescription