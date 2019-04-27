import React from 'react'
import './Button.css'

const Button = (props) => (
    <div>
        <button className="btnDodaj" >{props.text}</button>
    </div>
)

export default Button

