import Link from "next/link";
import FoodCart from "./UI/FoodCart";
import SearchBar from "./UI/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { useCategoryContext } from "./Providers";
import { getMealsByCategory } from "@/utils/fetchFunctions";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";
import { useMemo, useState } from "react";
import { MealSmall } from "@/types/meal";

function sortDataBy(sortingKey: "name" | "id", arr: MealSmall[]) {
  let sortedArr: typeof arr;

  if (sortingKey === "name") {
    //das ist eigentlich per default nach name sortiert -> kann hier das weglassen für performance, aber aus übungszwecken lasse drinn!
    sortedArr = [...arr].sort((a, b) => a.strMeal.localeCompare(b.strMeal));
  } else {
    sortedArr = [...arr].sort((a, b) => Number(a.idMeal) - Number(b.idMeal));
  }

  return sortedArr;
}

export default function Meals() {
  const [sortingKey, setSortingKey] = useState<"name" | "id">("name");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { category } = useCategoryContext();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category],
    queryFn: () => getMealsByCategory(category),
  });

  const sortedData = useMemo(() => {
    if (!data) return [];

    const sorted = sortDataBy(sortingKey, data.meals);

    return sorted;
  }, [data, sortingKey]);

  const catalog = useMemo(() => {
    if (!sortedData) return [];
    if (!searchTerm) return sortedData;

    const catalogToReturn = sortedData.filter((elem) =>
      elem.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return catalogToReturn;
  }, [sortedData, searchTerm]);

  function handleChangeSortingKey(value: "name" | "id") {
    setSortingKey(value);
  }

  function handleChangeSearchTerm(value: string) {
    setSearchTerm(value);
  }

  if (isError) {
    return <p className="text-customWhite">{error.message}</p>;
  }

  return (
    <div className="flex flex-col space-y-10 flex-1">
      <SearchBar
        onChangeSortingKey={handleChangeSortingKey}
        onChangeSearchTerm={handleChangeSearchTerm}
        searchTerm={searchTerm}
        sortingKey={sortingKey}
      ></SearchBar>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-h-[800px] overflow-y-auto px-2 py-2">
        {isLoading && (
          <LineSpinner size="40" stroke="4" speed="1" color="white" />
        )}
        {!isLoading &&
          catalog?.map((mealElement) => (
            <Link key={mealElement.idMeal} href={`/${mealElement.idMeal}`}>
              <FoodCart meal={mealElement}></FoodCart>
            </Link>
          ))}
      </div>
    </div>
  );
}
