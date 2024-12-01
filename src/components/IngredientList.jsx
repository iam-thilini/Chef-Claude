import React from "react";

export default function IngredientList(props) {
  // Function to remove a specific ingredient
  function removeIngredient(ingredient) {
    // Filter out the ingredient to be removed
    const updatedIngredients = props.ingredients.filter(
      (item) => item !== ingredient
    );
    // Call the updateIngredients function passed from MainComponent
    props.updateIngredients(updatedIngredients);
  }

  // Map over the ingredients array to create list items with a remove button
  const ingredientList = props.ingredients.map((ingredient) => (
    <li key={ingredient} className="ingredient-item">
      {ingredient}
      {/* Remove button to delete the ingredient */}
      <button
        onClick={() => removeIngredient(ingredient)}
        className="remove-ingredient-button"
        aria-label={`Remove ${ingredient}`} // Accessibility label
      >
        ×
      </button>
    </li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientList}
      </ul>
      {/* Display the "Get Recipe" button only if there are more than 3 ingredients */}
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          {/* Trigger getRecipe function when clicked */}
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
