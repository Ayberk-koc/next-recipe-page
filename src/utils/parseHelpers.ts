import { MealFull } from "@/types/meal";

export function parseIngredientList(meal: MealFull) {
  const ingredientList: string[] = [];

  const mealData = meal as Record<string, any>; //das ist nur für typescript

  for (let i = 0; i <= 20; i++) {
    const ingredient = mealData[`strIngredient${i}`];
    const measure = mealData[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredientList.push(
        `${measure?.trim() ?? ""} ${ingredient.trim()}`.trim()
      );
    }
  }

  return ingredientList;
}
