import { Link, useLoaderData } from "react-router-dom";
import { dataRecipes } from "../data/recipes";
import { getRecipeById } from "../models/recipe";
import { Recipe } from "../types/recipe";

export const loader = ({ params }: { params: any }) => {
  const recipe = getRecipeById(Number(params.recipeId));

  return recipe;
};

export const RecipeRoute = () => {
  // @ts-ignore
  const recipe: Recipe = useLoaderData();

  if (!recipe) {
    return (
      <div>
        <Link to="/recipes">Go to all recipes</Link>
        <p>Recipe not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Link to="/recipes">Go to all recipes</Link>

      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div>
        <h3>Ingredients</h3>
        {recipe?.ingredients && recipe?.ingredients?.length > 0 && (
          <ul>
            {recipe.ingredients?.map((ingredient) => {
              return <li key={ingredient.name}>{ingredient.name}</li>;
            })}
          </ul>
        )}
        {!recipe?.ingredients && <p>No ingredients.</p>}
      </div>

      <div>
        <h3>Steps</h3>
        {recipe?.steps && recipe?.steps?.length > 0 && (
          <ul>
            {recipe.steps?.map((step) => {
              return <li key={step.order}>{step.details}</li>;
            })}
          </ul>
        )}
        {!recipe?.steps && <p>No steps.</p>}
      </div>
    </div>
  );
};
