import React from 'react'
import './SmallButton.css'

const SmallButton = (props) => (
    <button className="SmallButton" onClick={props.change}>{props.text}</button>
)

export default SmallButton