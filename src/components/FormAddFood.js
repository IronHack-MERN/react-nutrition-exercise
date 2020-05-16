import React, { Component } from "react";

class FormAddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      kcal: "",
      url: "",
      showForm: false,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addNewFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      showForm: false,
    });
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Kc@l:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="calories"
                    value={this.state.calories}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">URL:</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="image"
                    placeholder="https://example.com"
                    value={this.state.image}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="level-right">
            <div className='level-item'>
            <button className="button is-primary">ADD</button>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}

export default FormAddFood;
