import { Link, useLoaderData } from "react-router-dom";

import { AllRecipes } from "../components/all-recipes";
import { getRecipes } from "../models/recipe";
import { Recipes } from "../types/recipe";

export const loader = async () => {
  return await getRecipes();
};

export const RootRoute = () => {
  // @ts-ignore
  const recipes: Recipes = useLoaderData();

  return (
    <div>
      <h1>Simple Recipe</h1>
      <div className="flex gap-1">
        <Link to="/new">Create new recipe</Link>
        <Link to="/recipes">List all recipes</Link>
      </div>
      <hr />
      {!recipes && <p>No recipes</p>}
      {recipes?.length > 0 && <AllRecipes recipes={recipes} />}
    </div>
  );
};
