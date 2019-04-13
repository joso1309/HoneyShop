import React from 'react'
import './MidImage.css'

const MidImage = (props) => (
    <div className={props.class}>
        <div className="Ptext">
            <span className="Border trans">{props.text}</span>
        </div>
    </div>
)

export default MidImage
