import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import food from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import Button from "./components/Button";


class App extends Component {
  state = {
    foods: food.slice(0,3),
  };

  xx = (food) => {
    const oneFoods = {
      name: "Papa rellena",
      calories: 550,
      image: "https://i.imgur.com/DupGBz5.jpg",
      quantity: 2,
    };
    console.log("adding new food");
    this.setState({
      foods: [...this.state.foods, oneFoods]
    });
  };

  addRandomFood = () => {
    const randomFood = food[Math.floor(Math.random() * food.length)];
    console.log('i add: ', randomFood)
    this.setState({
      foods: [...this.state.foods, randomFood],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>NutritApp</h1>
        <Button 
         myProp={this.addRandomFood.bind(this.state,food)}
        >
          Add new Food
          </Button>
        <div>
          {this.state.foods.map((food, index) => {
            return (
              <section key={index}>
                <FoodBox {...food} />
              </section>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
