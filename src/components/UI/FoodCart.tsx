import { MealSmall } from "@/types/meal";

export default function FoodCart({ meal }: { meal: MealSmall }) {
  const mealBg = meal.strMealThumb;
  console.log(mealBg);

  return (
    <div className="flex flex-col p-2 gap-2.5 flex-1 bg-customGray border border-solid rounded-xl hover:shadow-lg shadow-customWhite cursor-pointer hover:scale-[1.02] transition ease-in-out">
      <div
        style={{ backgroundImage: `url(${mealBg})` }}
        className={`h-[180px] self-stretch rounded-lg bg-cover bg-no-repeat bg-center`}
      ></div>
      <h2 className="text-customWhite text-second-medium self-stretch line-clamp-1">
        {meal.strMeal}
      </h2>
    </div>
  );
}
