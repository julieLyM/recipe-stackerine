import React, { Component } from "react";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Recipe from "./components/Recipe";

export default class App extends Component {
  render() {
    return (
      <div>
            <Title />
        <SearchBar />
        <Recipe/>

      </div>
    )
  }
}
