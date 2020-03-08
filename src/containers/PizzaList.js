import React, { Component } from "react";
import Pizza from "../components/Pizza";
import PizzaConsumer from "../Context";

class PizzaList extends Component {
  render() {
    return (
      <PizzaConsumer>
        {value => {
          const { pizzas } = value;
          return (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Topping</th>
                  <th scope="col">Size</th>
                  <th scope="col">Vegetarian?</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Confirm</th>
                </tr>
              </thead>
              <tbody>
              {
                pizzas.map(pizza => {
                  return <Pizza pizza={pizza}/>
                })
              }
              </tbody>
            </table>
          );
        }}
      </PizzaConsumer>
    );
  }
}

export default PizzaList;

{
  /* <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizza()
          }
        </tbody>
      </table> */
}
