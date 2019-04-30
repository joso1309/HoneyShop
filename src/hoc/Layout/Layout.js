import React, { Component } from 'react'
import './Layout.css'
import LandingPage from '../../components/LandingPage/LandingPage';
import MidImage from '../../components/MidImage/MidImage';
import ProductsSection from '../../sections/ProductsSection/ProductsSection';
import GallerySection from '../../sections/GallerySection/GallerySection';
import InfoSection from '../../sections/InfoSection/InfoSection';
import Footer from '../../components/Footer/Footer';
import BasketIcon from '../../components/BasketIcon/BasketIcon';

export default class Layout extends Component {

    render() {
        return (
            <div>
                <BasketIcon />

                <LandingPage />

                <ProductsSection
                    products={this.props.products}
                    updateProducts={this.props.updateProducts} />

                <MidImage class="Image2" />

                <GallerySection />

                <MidImage class="Image3" />

                <InfoSection />

                <Footer />
            </div>
        )
    }
}
