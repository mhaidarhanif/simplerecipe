import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoute, loader as rootLoader } from "./routes/root";
import { RecipesRoute, loader as recipesLoader } from "./routes/recipes";
import { RecipeRoute, loader as recipeLoader } from "./routes/recipe";
import { NewRecipeRoute, action as newRecipeAction } from "./routes/new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    loader: rootLoader,
  },
  {
    path: "/recipes",
    element: <RecipesRoute />,
    loader: recipesLoader,
  },
  {
    path: "/recipes/:recipeId",
    element: <RecipeRoute />,
    loader: recipeLoader,
  },
  {
    path: "/new",
    element: <NewRecipeRoute />,
    action: newRecipeAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
