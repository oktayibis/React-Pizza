import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

 


  render() {
   // console.log(this.state.pizzas);
    return (
      <Fragment>
        <Header/>
        <PizzaForm />
        <PizzaList />
      </Fragment>
    );
  }
}

export default App;
