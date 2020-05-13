import React, { Component } from "react";

class FormAddFood extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      kcal: '',
      url: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type='text' value={this.state.name} onChange={e => this.handleChange(e)}/>

          <label>Kc@l:</label>
          <input type='number' value={this.state.number} onChange={e => this.handleChange(e)}/>

          <label>URL:</label>
          <input type='text' value={this.state.url} onChange={e => this.handleChange(e)}/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormAddFood;
