import React, { Component } from "react";

const PizzaContext = React.createContext();
//provider, consumer
const apiURL = "http://localhost:3000/pizzas";

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_PIZZA":
      return {
        ...state,
        pizzas: state.pizzas.filter(pizza => action.payload !== pizza.id)
      };
    case "EDIT_PIZZA":
      return {
        ...state,
        pizza: state.pizzas.find(pizza => action.payload === pizza.id)
      };
    case "ADD_PIZZA":
      return {
        ...state,
        pizzas: [action.payload, ...state.pizzas]
      };
      case "CHANGE_PIZZA":
        let index = state.pizzas.indexOf(action.payload)
      return {
        ...state,
        pizzas: state.pizzas.splice(index,1,action.payload)
      };

    default:
      return state;
  }
};
export class PizzaProvider extends Component {
  state = {
    pizzas: [],
    pizza: {},
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    fetch(apiURL)
      .then(respon => respon.json())
      .then(data => this.setState({ pizzas: data }));
  }

  render() {
    return (
      <PizzaContext.Provider value={this.state}>
        {this.props.children}
      </PizzaContext.Provider>
    );
  }
}
const PizzaConsumer = PizzaContext.Consumer;

export default PizzaConsumer;
