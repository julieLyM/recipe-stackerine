import axios from "axios";
import React from "react";
import auth from ".././auth";

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
    return (
      <div>
        <div>{this.state.results.map(result => result.recipe.label)}</div>
      </div>
    );
  }
}
export default Recipe;
