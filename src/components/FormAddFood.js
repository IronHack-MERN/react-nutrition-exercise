import React, { Component } from "react";

class FormAddFood extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      kcal: '',
      url: '',
      showForm: false,
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addNewFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
      showForm: false,
    })
  };

  handleChange(event){
    let { name, value } = event.target;
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type='text' name='name' value={this.state.name} onChange={e => this.handleChange(e)}/>

          <label>Kc@l:</label>
          <input type='text' name='calories' value={this.state.calories} onChange={e => this.handleChange(e)}/>

          <label>URL:</label>
          <input type='text' name='image' placeholder="https://example.com" value={this.state.image} onChange={e => this.handleChange(e)}/>

          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default FormAddFood;
