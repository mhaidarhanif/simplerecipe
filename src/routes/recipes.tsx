import { Link, useLoaderData } from "react-router-dom";

import { AllRecipes } from "../components/all-recipes";
import { getRecipes } from "../models/recipe";
import { Recipes } from "../types/recipe";

export const loader = async () => {
  return await getRecipes();
};

export const RecipesRoute = () => {
  // @ts-ignore
  const recipes: Recipes = useLoaderData();

  return (
    <div>
      <Link to="/">Go to home</Link>
      <h1>All Recipes</h1>
      {!recipes && <p>No recipes</p>}
      {recipes?.length > 0 && <AllRecipes recipes={recipes} />}
    </div>
  );
};
