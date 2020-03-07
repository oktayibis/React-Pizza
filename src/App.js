import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


const apiURL = 'http://localhost:3000/pizzas';

class App extends Component {

  
  state = {
    pizzas : [],
    pizza : {}
  }

  handleClicker = pizza => {
    this.setState({
      pizza : pizza
    })
  }
 
handleSubmit = (prevPizza, newPizza) => {
 this.setState({
   pizzas : this.state.pizzas.map( item => {
    return item === prevPizza ? newPizza : prevPizza
  })
 })
}
componentDidMount(){
  fetch(apiURL)
  .then(respon => respon.json())
  .then(data =>  this.setState({pizzas : data}))
}





  render() {
   // console.log(this.state.pizzas);
    return (
      <Fragment>
        <Header/>
        <PizzaForm onSubmitHandle={this.handleSubmit} pizza={this.state.pizza}/>
        <PizzaList onHandleClicker={this.handleClicker} data={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
