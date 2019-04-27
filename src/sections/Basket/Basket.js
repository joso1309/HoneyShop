import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Basket extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Natrag</Link>
                <div>
                    basket
                </div>
                <Link to='/podaci'>Nastavi</Link>
            </div>
        )
    }
}
