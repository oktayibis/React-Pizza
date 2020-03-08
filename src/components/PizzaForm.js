import React from "react"
import PizzaConsumer from "../Context";

const PizzaForm = () => {

return (
  <PizzaConsumer>
    {
      value => {
        const {pizza} = value;

        return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping}/>
        </div>
        <div className="col">
          <select defaultValue={pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!pizza.vegetarian}/>
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

      }
    }
  </PizzaConsumer>
)



 
}

export default PizzaForm


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