import axios from "axios";
import React from "react";
import auth from ".././auth";
import OneRecipe from "./OneRecipe";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  getRecipe = async query => {
    const results = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${auth.id}&app_key=${auth.key}`
    );
    this.setState({ results: results.data.hits });
    console.log(results.data.hits);
  };

  componentDidMount() {
    this.getRecipe();
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        {results.map(result => (
          <OneRecipe key={result.label} result={result} />
        ))}
      </div>
    );
  }
}
export default Recipe;
