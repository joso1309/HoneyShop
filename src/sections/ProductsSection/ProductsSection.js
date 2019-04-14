import React, { Component } from 'react'
import './ProductsSection.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ProductElement from '../../components/ProductElement/ProductElement';
import ProductDescription from '../../components/ProductDescription/ProductDescription';


function TabContainer(props) {

    description = null

    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

let description = null

const productsDescription = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur, nulla sit amet viverra faucibus, nisl enim varius lectus, eget sagittis magna tortor quis lorem. Quisque quis tortor felis. Morbi interdum vestibulum arcu. Sed bibendum non ipsum a dictum. Curabitur eget sollicitudin quam, ut congue nisi. Sed eu lorem hendrerit, facilisis nibh a, viverra arcu. Proin vel ex ornare, tristique dui id, maximus urna.",
    "hkhkhkhkhkhk",
    "tralalalalal",
    "tralalalalal",
]

class ProductsSection extends Component {
    state = {
        tabValue: 0,
        showDescription: false
    };

    handleChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    showDescriptionHandler = (id) => {
        this.setState({ showDescription: true })
        description = <ProductDescription text={productsDescription[id]}></ProductDescription>
    }

    render() {

        return (
            <section className="ProductSection section-dark">
                <h3>Proizvodi</h3>

                <Tabs
                    className="Tabs"
                    value={this.state.tabValue}
                    onChange={this.handleChange}
                    centered
                >
                    <Tab label="Med" />
                    <Tab label="Drugo" />
                    <Tab label="Trece" />
                </Tabs>

                {this.state.tabValue === 0 && <TabContainer>
                    <ProductElement key={0} title="Prvi" clicked={() => this.showDescriptionHandler(0)}></ProductElement>
                    <ProductElement key={1} title="Drugi" clicked={() => this.showDescriptionHandler(1)}></ProductElement>
                    {/* <ProductElement title="Drugi"></ProductElement>
                    <ProductElement title="Prvi"></ProductElement>
                    <ProductElement title="Drugi"></ProductElement> */}
                </TabContainer>}

                {this.state.tabValue === 1 && <TabContainer>
                    {/* <ProductElement title="Treci"></ProductElement>
                    <ProductElement title="Treci"></ProductElement> */}
                </TabContainer>}

                {this.state.tabValue === 2 && <TabContainer>
                    {/* <ProductElement title="Prvi"></ProductElement> */}
                </TabContainer>}

                {description}
            </section>
        )
    }
}

export default ProductsSection