import React, { Component } from 'react'
import './ProductsSection.css'
import Product from '../../components/Product/Product';

export default class ProductsSection extends Component {


    render() {
        return (
            <section className="ProductSection section-dark">
                <h2>Proizvodi</h2>
                <Product title="Prvi"></Product>
                <Product title="Drugi"></Product>
                <Product title="Treci"></Product>
                <Product title="Treci"></Product>
            </section>
        )
    }
}
