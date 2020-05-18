import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import food from "./data/foods.json";
import FoodBox from "./components/FoodBox";
import Button from "./components/Button";
import FormAddFood from "./components/FormAddFood";
import SearchBar from "./components/SearchBar";

class App extends Component {
  state = {
    foods: food,
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

  provaFunction = () => {
    console.log("prova function");
  };

  filterFood = (foodFilter) => {
    const foodFiltered = food.filter((food) =>
      food.name.toLowerCase().includes(foodFilter)
    );

    this.setState({
      foods: foodFiltered,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title is-1">NutritApp</h1>
        <Button myProp={this.addRandomFood.bind(this.state, food)}>
          Add new random Food
        </Button>

        {this.state.showForm ? (
          <FormAddFood addNewFood={this.addFoodHandler} />
        ) : (
          <Button myProp={this.showForm}>Add personal food</Button>
        )}

        <div>
          <SearchBar filterFood={this.filterFood.bind(this.state)} />
        </div>
        <div className="columns">
          <div className="column">
            {this.state.foods.map((food, index) => {
              return (
                <section key={index}>
                  <FoodBox {...food} provaFunction={this.provaFunction} />
                </section>
              );
            })}
          </div>

          <div className="column">
            <h2 className="title"> </h2>
            <div className='container is-medium'>
            <h4 className='title'>Consejos de alimentación:</h4>
            <ul>
              <li>Coma alimentos variados.</li>
              <li>
                Base su dieta en alimentos ricos en hidratos de carbono.
              </li>
              <li>Tome muchas frutas y verduras.</li>
              <li>Mantenga un peso corporal saludable y siéntase bien.</li>
              <li>
                Coma raciones moderadas: reduzca, no elimine alimentos.
              </li>
              <li>Coma regularmente.</li>
              <li>Beba muchos líquidos.</li>
              <li>Muévase.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
