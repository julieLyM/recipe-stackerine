import React, { Component } from "react";

export default class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     query: ""
  //   };
  // }

  // handleChange = event => {
  //   console.log(event.target.value);
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  handleClick() {
    console.log("clic clic");
  }
  render() {
    return (
      <div>
        <h2>Search Bar</h2>
        <input type="text" onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}
