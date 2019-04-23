import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom'
import Basket from './sections/Basket/Basket'
import DeliveryForm from './sections/DeliveyForm/DeliveryForm'

class App extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log('treballlalalla');

  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/kosarica' exact component={Basket}></Route>
          <Route path='/podaci' component={DeliveryForm}></Route>
          <Route path='/' component={Layout}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
