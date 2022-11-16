export type Recipe = {
  id?: number;
  title: string;
  description?: string;
  imageUrl?: string;
  ingredients?: {
    name: string;
  }[];
  steps?: {
    order: number;
    details: string;
  }[];
};

export type Recipes = Recipe[];
