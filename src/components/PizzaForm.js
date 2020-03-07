import React, { useState , useEffect} from "react"

const PizzaForm = (props) => {

const newPizza = {...props.pizza}

 



  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(e) => newPizza.topping = e.target.value} type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
            newPizza.topping
}/>
        </div>
        <div className="col">
          <select value={newPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={newPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!newPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button  type="submit" className="btn btn-success" onClick={()=>props.onSubmitHandle(props.pizza, newPizza)}>Submit</button>
        </div>
      
      </div>
  
  )
}

export default PizzaForm
