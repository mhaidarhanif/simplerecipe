import type { Recipes } from "../types/recipe";

export const dataRecipes: Recipes = [
  {
    id: 1,
    title: "Nasi goreng telur",
    description: "Nasi goreng sederhana dan enak.",
    imageUrl: "",
    ingredients: [
      { name: "Nasi putih" },
      { name: "Telur" },
      { name: "Bawang putih" },
      { name: "Bawang merah" },
      { name: "Minyak goreng" },
      { name: "..." },
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
    description: "Mi ayam abang-abang",
    ingredients: [
      { name: "Ayam fillet mentah" },
      { name: "Mi keriting" },
      { name: "Kecap" },
      { name: "..." },
    ],
    steps: [
      { order: 1, details: "A" },
      { order: 2, details: "B" },
      { order: 3, details: "C" },
    ],
  },
  {
    id: 3,
    title: "Opor ayam",
    description: "Opor ayam ala lebaran",
    ingredients: [
      { name: "Ayam dengan tulang" },
      { name: "Santan" },
      { name: "..." },
    ],
    steps: [
      { order: 1, details: "A" },
      { order: 2, details: "B" },
      { order: 3, details: "C" },
    ],
  },
  {
    id: 4,
    title: "Soto betawi",
    description: "Makanan mewah yang sederhana",
    ingredients: [
      { name: "Daging sapi potong" },
      { name: "Kecap" },
      { name: "..." },
    ],
    steps: [
      { order: 1, details: "A" },
      { order: 2, details: "B" },
      { order: 3, details: "C" },
    ],
  },
  {
    id: 5,
    title: "Bakwan",
    description: "Mi ayam abang-abang",
    ingredients: [
      { name: "Ayam fillet mentah" },
      { name: "Mi keriting" },
      { name: "Kecap" },
      { name: "..." },
    ],
    steps: [
      { order: 1, details: "A" },
      { order: 2, details: "B" },
      { order: 3, details: "C" },
    ],
  },
];
