import React, { Component } from 'react'
import './Layout.css'
import LandingPage from '../../components/LandingPage/LandingPage';
import MidImage from '../../components/MidImage/MidImage';
import ProductsSection from '../../sections/ProductsSection/ProductsSection';
import GallerySection from '../../sections/GallerySection/GallerySection';
import InfoSection from '../../sections/InfoSection/InfoSection';
import Footer from '../../components/Footer/Footer';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <LandingPage></LandingPage>

                <ProductsSection></ProductsSection>

                <MidImage class="Image2"></MidImage>

                <GallerySection></GallerySection>

                <MidImage class="Image3"></MidImage>

                <InfoSection></InfoSection>

                <Footer></Footer>
            </div>
        )
    }
}
