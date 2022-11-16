import type { Recipes } from "../types/recipe";

export const dataRecipes: Recipes = [
  {
    id: 1,
    title: "Nasi goreng telur",
    description: "Nasi goreng sederhana dan enak.",
    imageUrl: "",
    ingredients: [
      { name: "Nasi putih" },
      { name: "Bawang putih" },
      { name: "Bawang merah" },
      { name: "Minyak goreng" },
    ],
    steps: [
      {
        order: 1,
        details: "Siapkan nasi putih yang sudah disimpan di kulkas semalaman.",
      },
      {
        order: 2,
        details: "Siapkan wajan dengan minyak panas",
      },
    ],
  },
  {
    id: 2,
    title: "Mi ayam",
  },
  {
    id: 3,
    title: "Opor ayam",
  },
  {
    id: 4,
    title: "Soto betawi",
  },
  {
    id: 5,
    title: "Bakwan",
  },
];
