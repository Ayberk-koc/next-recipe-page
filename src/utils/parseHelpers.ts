import { MealFull } from "@/types/meal";

export function parseIngredientList(meal: MealFull) {
  const ingredientList: string[] = [];

  for (let i = 0; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof MealFull;
    const measureKey = `strMeasure${i}` as keyof MealFull;

    const ingredient = meal[ingredientKey];
    const measure = meal[measureKey];

    if (ingredient && ingredient.trim()) {
      ingredientList.push(
        `${measure?.trim() ?? ""} ${ingredient.trim()}`.trim()
      );
    }
  }

  return ingredientList;
}
