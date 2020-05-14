import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import food from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import Button from "./components/Button";
import FormAddFood from "./components/FormAddFood";

class App extends Component {
  state = {
    foods: food.slice(0, 3),
    showForm: false,
  };

  addRandomFood = () => {
    const randomFood = food[Math.floor(Math.random() * food.length)];
    this.setState({
      foods: [...this.state.foods, randomFood],
    });
  };

  addFoodHandler = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);
    this.setState({
      foods: foodsCopy,
      showForm: false,
    });
  };

  showForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title is-1">NutritApp</h1>
        <Button
          myProp={this.addRandomFood.bind(this.state, food)}
        >
          Add new random Food
        </Button>

        {this.state.showForm ? (
          <FormAddFood addNewFood={this.addFoodHandler} />
        ) : (
          <Button myProp={this.showForm}>Add personal food</Button>
        )}
        <div className="columns">
          <div className="column">
            {this.state.foods.map((food, index) => {
              return (
                <section key={index}>
                  <FoodBox {...food} />
                </section>
              );
            })}
          </div>

          <div className="column">
            <h2 className="title">ToDay Food</h2>
            <ul>hola que ase</ul>
            <p>Total of Calories </p>
          </div>
        </div>

      
      </div>
    );
  }
}

export default App;
