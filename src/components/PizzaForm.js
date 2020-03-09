import React, { useState } from "react";
import PizzaConsumer from "../Context";

const PizzaForm = () => {
  const [topping, setTopping] = useState(null);
  const [size, setSize] = useState(null);
  const [vegetarian, setVeg] = useState(null);
  const [id, setId] = useState(50);

  const handleTopping = e => {
    setTopping(e.target.value);
  };
  const handleSize = e => {
    setSize(e.target.value);
  };

  const handleVeg = e => {
    const result = e.target.value === "Vegetarian" ? true : false;
    setVeg(result);
    //console.log(result);
  };
  const addPizza = (dispatch, e) => {
    e.preventDefault();

    const newPizza = {
      id: id,
      topping,
      size,
      vegetarian
    };
    dispatch({ type: "ADD_PIZZA", payload: newPizza });
    console.log(newPizza);
    setId(id + 1);
  };

  const cancelHandle = e => {
    window.location.reload();
    return false;
  };

  return (
    <PizzaConsumer>
      {value => {
        const { pizza, dispatch } = value;

        const changeHandle = (dispatch, e) => {
          e.preventDefault();
          const newPizza = {
            ...pizza,
            topping: topping === null ? pizza.topping : topping,
            size: size ===null ? pizza.size : size,
            vegetarian : vegetarian === null ? pizza.vegetarian : vegetarian
          };

          dispatch({ type: "CHANGE_PIZZA", payload: newPizza });
          console.log(newPizza);
        };
        return (
          <div className="form-row">
            <div className="col-5">
              <input
                onChange={e => handleTopping(e)}
                type="text"
                className="form-control"
                placeholder="Pizza Topping"
                value={topping === null ? pizza.topping : topping}
              />
            </div>
            <div className="col">
              <select
                onChange={e => handleSize(e)}
                value={size === null ? pizza.size : size}
                className="form-control"
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className="col">
              <div className="form-check">
                <input
                  onChange={e => handleVeg(e)}
                  className="form-check-input"
                  type="radio"
                  value="Vegetarian"
                  checked={vegetarian === null ? pizza.vegetarian : vegetarian}
                />
                <label className="form-check-label">Vegetarian</label>
              </div>
              <div className="form-check">
                <input
                  onChange={e => handleVeg(e)}
                  className="form-check-input"
                  type="radio"
                  value="Not Vegetarian"
                  checked={
                    vegetarian === null ? !pizza.vegetarian : !vegetarian
                  }
                />
                <label className="form-check-label">Not Vegetarian</label>
              </div>
            </div>
            <div className="col">
              <button
                onClick={addPizza.bind(this, dispatch)}
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
              <button
                onClick={changeHandle.bind(this, dispatch)}
                type="submit"
                className="btn btn-warning m-2"
              >
                Change
              </button>
              <button
                onClick={cancelHandle}
                type="submit"
                className="btn btn-danger m-1"
              >
                Cancel
              </button>
            </div>
          </div>
        );
      }}
    </PizzaConsumer>
  );
};

export default PizzaForm;

/*
 return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
            null
}/>
        </div>
        <div className="col">
          <select value={null} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button  type="submit" className="btn btn-success" >Submit</button>
        </div>
      
      </div>
  
  )
*/
