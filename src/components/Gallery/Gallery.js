import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Gallery.css'

const Gallery = () => (
    <Carousel className="Carousel">
        <div>
            <div className="image1"></div>
        </div>
        <div>
            <div className="image1"></div>
        </div>
        <div>
            <div className="image1"></div>
        </div>
        <div>
            <div className="image1"></div>
            <img alt="" style={{ "display": "none" }}></img>
        </div>
    </Carousel >
)

export default Gallery
