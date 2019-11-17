import React, { Component } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Recipe from "./components/Recipe";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  searchValue(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Title />
        <SearchBar onQueryChange={this.searchValue.bind(this)} /> <Recipe />
      </div>
    );
  }
}
