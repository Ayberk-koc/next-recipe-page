import { CategoriesResponse } from "@/types/category";
import { MealsByCategoryResponse } from "@/types/meal";

export async function getCategories(): Promise<CategoriesResponse> {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (!response.ok) {
    throw new Error("etwas falsch");
  }

  const data: CategoriesResponse = await response.json();

  return data;
}

export async function getMealsByCategory(
  category: string
): Promise<MealsByCategoryResponse> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  if (!response.ok) {
    throw new Error("etwas falsch");
  }

  const data: MealsByCategoryResponse = await response.json();

  return data;
}
