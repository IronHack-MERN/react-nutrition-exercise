import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
     value: ''
    }
  }  
  
  handleChange = (event) => {
    const {value} = event.target;
    this.setState({value: value});
    console.log('el value es: ', value);

    this.props.filterFood(this.state.value);
  }

  render() {
    return (
      <div className="field has-addons">
        <input 
          className="input is-focused"
          type="text" 
          placeholder="pizza, eggs, bread ..." 
          name = 'theFood'
          value={this.state.theFood}
          onChange = {this.handleChange}
        />
    </div>
    )
  }
}

export default SearchBar;