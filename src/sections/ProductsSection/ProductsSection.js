import React, { Component } from 'react'
import './ProductsSection.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ProductElement from '../../components/ProductElement/ProductElement';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import getProducts from '../../services/getProducts'


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

let descriptionText = null
let productTitle = null

const allProducts = getProducts()

class ProductsSection extends Component {
    state = {
        tabValue: 0,
        showDescription: false
    };

    handleTabChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    handleDescriptionOpen = (text, title) => {
        this.setState({ showDescription: true });
        descriptionText = text
        productTitle = title
    };

    handleDescriptionClose = () => {
        this.setState({ showDescription: false });
    };

    render() {

        return (
            <section className="ProductSection section-dark">
                <h3>Proizvodi</h3>

                <Tabs
                    className="Tabs"
                    value={this.state.tabValue}
                    onChange={this.handleTabChange}
                    centered
                >
                    {allProducts.map(category => {
                        return (
                            <Tab label={category.categoryName} key={category.tabId} />
                        )
                    })}
                </Tabs>

                {allProducts.map(category => {
                    return (
                        this.state.tabValue === category.tabId && <TabContainer key={category.tabId}>
                            {allProducts[category.tabId].products.map(product => {
                                return (
                                    <ProductElement
                                        key={product.productId}
                                        title={product.productTitle}
                                        price={product.productPrice}
                                        clicked={() => this.handleDescriptionOpen(product.productDescription, product.productTitle)} />
                                )
                            })}

                        </TabContainer>
                    )
                })}

                <ProductDescription title={productTitle} text={descriptionText} opened={this.state.showDescription} closeDescription={this.handleDescriptionClose}></ProductDescription>
            </section>
        )
    }
}

export default ProductsSection