import React from "react";

export default function OneRecipe({ result }) {
  return (
    <div>
      <ul>
        <li>{result.recipe.label}</li>
        <h3>Ingredients:</h3>
        <p>{result.recipe.ingredientLines}</p>
        <img src={result.recipe.image} />
      </ul>
    </div>
  );
}
