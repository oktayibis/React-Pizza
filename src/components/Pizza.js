import React from "react";
import PizzaConsumer from "../Context";

const Pizza = props => {
  const clicklerHandle = (dispatch, e) => {
    const { pizza } = props;
    
    
    dispatch({ type: "EDIT_PIZZA", payload: pizza.id });
  };

  const deleteHandle = (dispatch, e) => {
    const {pizza} = props;
    dispatch({type:'DELETE_PIZZA', payload : pizza.id})
  }

  return (
    <PizzaConsumer>
      {value => {
        const { dispatch } = value;
        return (
          <tr>
            <td>{props.pizza.topping}</td>
            <td>{props.pizza.size}</td>
            <td>{props.pizza.vegetarian ? "YES" : "NO"}</td>
            <td>
              <button
                onClick={clicklerHandle.bind(this, dispatch)}
                type="button"
                className="btn btn-primary"
              >
                Edit Pizza
              </button>
              
            </td>
            <td>
              <button
                onClick={deleteHandle.bind(this, dispatch)}
                type="button"
                className="btn btn-danger"
              >
                Done !
              </button>
              
            </td>
          </tr>
        );
      }}
    </PizzaConsumer>
  );
};

export default Pizza;

/**
 

 */
