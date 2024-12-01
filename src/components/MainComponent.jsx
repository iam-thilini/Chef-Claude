import React, { useState } from "react";
import IngredientList from "./IngredientList";
import { getRecipeFromClaude } from "../ai";
import ClaudeRecipe from "./ClaudeRecipe";

function MainComponent() {
  // State to store the list of ingredients
  const [ingredients, setIngredients] = useState([]);
  // State to store the recipe returned from the AI
  const [recipe, setRecipe] = useState("");

  // Function to fetch the recipe based on the list of ingredients
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromClaude(ingredients);
    setRecipe(recipeMarkdown); // Update the recipe state
  }

  // Function to add a new ingredient to the list
  function addIngredient(event) {
    event.preventDefault(); // Prevent form submission default behavior
    const formData = new FormData(event.target); // Extract form data
    const newIngredient = formData.get("ingredient"); // Get the input value
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); // Update state with the new ingredient
      event.target.reset(); // Clear the input field
    }
  }

  // Function to update the ingredients list
  // This function is passed to IngredientList as a prop
  function updateIngredients(updatedIngredients) {
    setIngredients(updatedIngredients); // Update state with the new list
  }

  return (
    <main>
      {/* Form to add a new ingredient */}
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient" // Accessibility label
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {/* Render IngredientList only if there are ingredients */}
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients} // Pass current ingredients as a prop
          updateIngredients={updateIngredients} // Pass the update function as a prop
          getRecipe={getRecipe} // Pass the getRecipe function as a prop
        />
      )}

      {/* Render ClaudeRecipe component only if a recipe is available */}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}

export default MainComponent;
