import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom'
import Basket from './sections/Basket/Basket'
import DeliveryForm from './sections/DeliveyForm/DeliveryForm'
import getProducts from './services/getProducts';
// import getFormInputs from './services/getFormInputs';

class App extends Component {

  state = {
    productList: getProducts(),
  }


  updateProducts = (updatedProductList) => {
    console.log('updajete stanja');

    this.setState({ productList: updatedProductList })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/kosarica' exact
            component={(props) => <Basket {...props}
              updateProducts={this.updateProducts}
              products={this.state.productList} />} />
          <Route path='/podaci' component={DeliveryForm} products={this.state.productList} />
          <Route path='/' component={(props) => <Layout {...props}
            updateProducts={this.updateProducts}
            products={this.state.productList} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
