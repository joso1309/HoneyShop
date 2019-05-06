import React, { Component } from 'react'
import './GallerySection.css'
import Gallery from '../../components/Gallery/Gallery';

export default class GallerySection extends Component {
    render() {
        return (
            <section className="Section section-light">
                <h2>Galerija</h2>
                <div>
                    <Gallery></Gallery>
                </div>
            </section>
        )
    }
}
