import React from 'react'
import './BasketIcon.css'

const BasketIcon = (props) => {
    return (
        <div className="Navbar">
            <div className="Basket" onClick={props.clicked}>
                <div className="BasketImg"></div>
            </div>
        </div>
    )
}

export default BasketIcon