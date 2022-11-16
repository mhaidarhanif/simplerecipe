import localforage from "localforage";
import { dataRecipes } from "../data/recipes";

import { Recipe, Recipes } from "../types/recipe";

export const setRecipes = (recipes: Recipes) => {
  return localforage.setItem("recipes", recipes);
};

export const getRecipes = async () => {
  // @ts-ignore
  const existingRecipes: Recipes = await localforage.getItem("recipes");

  if (existingRecipes?.length > 0) {
    return existingRecipes;
  } else {
    setRecipes(dataRecipes);
    const recipes = await localforage.getItem("recipes");
    return recipes;
  }
};

export const getRecipeById = async (id: number) => {
  // @ts-ignore
  const recipes: Recipes = await localforage.getItem("recipes");

  const recipe = recipes.find((recipe) => {
    return recipe.id === id;
  });

  return recipe;
};

export const createNewRecipe = async (recipe: Recipe): Promise<Recipe> => {
  // @ts-ignore
  const recipes: Recipes = await getRecipes();

  const lastIndex: number = recipes.length - 1;
  const lastRecipe: Recipe = recipes[lastIndex];
  const lastId: number = lastRecipe?.id || 0;

  const newRecipe = {
    id: lastId + 1,
    title: recipe.title,
    description: recipe.description,
  };

  const newRecipes = [...recipes, newRecipe];

  await setRecipes(newRecipes);

  return newRecipe;
};
