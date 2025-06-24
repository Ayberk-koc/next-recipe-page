import Link from "next/link";
import FoodCart from "./UI/FoodCart";
import SearchBar from "./UI/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { useCategoryContext } from "./Providers";
import { getMealsByCategory } from "@/utils/fetchFunctions";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

export default function Meals() {
  const { category } = useCategoryContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category],
    queryFn: () => getMealsByCategory(category),
  });

  if (isError) {
    return <p className="text-customWhite">{error.message}</p>;
  }

  return (
    <div className="flex flex-col space-y-10 flex-1">
      <SearchBar></SearchBar>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {isLoading && (
          <LineSpinner size="40" stroke="4" speed="1" color="white" />
        )}
        {!isLoading &&
          data?.meals.map((mealElement) => (
            <Link key={mealElement.idMeal} href={`/${mealElement.idMeal}`}>
              <FoodCart meal={mealElement}></FoodCart>
            </Link>
          ))}
      </div>
    </div>
  );
}
