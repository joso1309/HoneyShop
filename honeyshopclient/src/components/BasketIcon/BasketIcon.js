import React from 'react'
import './BasketIcon.css'
import { Link } from 'react-router-dom'

const BasketIcon = (props) => {
    return (
        <div className="Navbar">
            <Link to='/kosarica'>
                <div className="BasketDiv">
                    <div className="BasketImg"></div>
                </div>
            </Link>
        </div >
    )
}

export default BasketIcon