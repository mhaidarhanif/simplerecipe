import { Form, Link, redirect } from "react-router-dom";
import { createNewRecipe } from "../models/recipe";
import { Recipe } from "../types/recipe";

export const action = async ({ request }: { request: any }) => {
  console.log("Create new recipe!");

  const formData = await request.formData();

  const recipeData: Recipe = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  const recipe = await createNewRecipe(recipeData);

  console.log({ recipe });

  return redirect(`/recipes/${recipe.id}`);
};

export const NewRecipeRoute = () => {
  return (
    <div>
      <Link to="/recipes">Go to all recipes</Link>
      <h1>Create New Recipe</h1>

      <Form method="post" className="max-w-lg">
        <div className="flex-col">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            placeholder="Recipe title"
          />
        </div>
        <div className="flex-col">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={10}
            placeholder="Recipe description"
          ></textarea>
        </div>

        <input type="submit" value="Save" />
      </Form>
    </div>
  );
};
