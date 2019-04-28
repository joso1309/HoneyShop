import React from 'react'
import './Button.css'

const Button = (props) => (
    <div>
        <button className="btnDodaj" onClick={props.clicked} >{props.text}</button>
    </div>
)

export default Button

