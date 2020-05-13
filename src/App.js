import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import food from "./data/foods.json";
import FoodBox from "./components/FoodBox";

class App extends Component {
  state = {
    foods: { food },
  };

  render() {
    return (
      <div className="App">
        <h1>NutritApp</h1>
        <div>
          {
            food.map( (food, index) => {
              return(
                <section key={index}>
                <FoodBox
                  {...food}
                  />
                </section>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
