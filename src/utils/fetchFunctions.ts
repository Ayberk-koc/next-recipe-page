import { CategoriesResponse } from "@/types/category";
import { MealsByCategoryResponse, MealByIdResponse } from "@/types/meal";

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

type Result<T> = { ok: true; data: T } | { ok: false; error: string };
export async function getMealById(
  id: string
): Promise<Result<MealByIdResponse>> {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!response.ok) {
    throw { ok: false, error: "HTTP Error" };
  }

  const data: MealByIdResponse = await response.json();

  return { ok: true, data: data };
}
