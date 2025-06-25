import Category from "./UI/Category";

import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";
import { getCategories } from "@/utils/fetchFunctions";
import { useQuery } from "@tanstack/react-query";
import { useCategoryContext } from "./Providers";

export default function Categorys() {
  const { changeCategory, category } = useCategoryContext();

  function handleChangeCategory(value: string) {
    changeCategory(value);
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Categories"],
    queryFn: () => getCategories(),
  });

  if (isError) {
    return <p className="text-customWhite">{error.message}</p>;
  }

  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-first-semibold text-customWhite px-1">Categories</h1>
      <div className="grid grid-cols-1 min-[455px]:grid-cols-2 gap-3 lg:grid-cols-1 max-h-80 overflow-y-auto scroll-smooth px-1 py-1">
        {isLoading && (
          <LineSpinner size="40" stroke="4" speed="1" color="white" />
        )}
        {!isLoading &&
          data?.categories.map((categoryElement) => (
            <Category
              key={categoryElement.idCategory}
              category={categoryElement}
              isActive={category === categoryElement.strCategory}
              changeCategory={() =>
                handleChangeCategory(categoryElement.strCategory)
              }
            ></Category>
          ))}
      </div>
    </div>
  );
}
