import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {
  let classSwap = [];
  for(let i = 0; i < recipes.length; i++) {
    if((i+1) % 2 === 0) {
      classSwap.push("");
    } else {
      classSwap.push("recipeColor");
    }
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="recipeEntries">
        {recipes.map((recipe, index) => (
            <Recipe
              deleteRecipe={() => deleteRecipe(index)}
              key={index}
              entry={recipe}
              styleClass={classSwap[index]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
