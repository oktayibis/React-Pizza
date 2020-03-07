import React, { Component } from 'react';
import Pizza from '../components/Pizza'
import PizzaForm from '../components/PizzaForm'
class PizzaList extends Component {


  renderPizza = () => {
   
 
    return this.props.data.map(pizza => {
      return (
        <Pizza onHandleClicker={this.props.onHandleClicker} pizza = {pizza} />
      )
    })
  }



  render() {
    return (
      <table className="table table-striped">
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
      </table>
    );
  }

}

export default PizzaList;
