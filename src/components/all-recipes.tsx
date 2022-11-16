import { Link } from "react-router-dom";
import { Recipes } from "../types/recipe";

export const AllRecipes = ({ recipes }: { recipes: Recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <Link key={recipe.title} to={`/recipes/${recipe.id}`}>
            <div>
              <h2>{recipe.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
