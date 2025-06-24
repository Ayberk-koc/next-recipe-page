import Image from "next/image";
import Link from "next/link";
import { getMealById } from "@/utils/fetchFunctions";
import { parseIngredientList } from "@/utils/parseHelpers";
import { Suspense } from "react";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

async function MealInstruction({ mealSlug: mealId }: { mealSlug: string }) {
  const response = await getMealById(mealId);

  if (!response.ok) {
    //throw new Error(response.error); falls error.tsx-file ausgezeigt werden soll (das ist reserved file-name)
    //am besten eine custom error-component machen!
    return <p>Error</p>;
  }

  const data = response.data;
  const meal = data.meals[0];
  const ingredients = parseIngredientList(meal);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${meal.strMealThumb})` }}
        className="bg-center bg-cover bg-no-repeat overflow-hidden h-[400px] self-stretch mb-8"
      ></div>
      <h1 className="text-first-semibold text-customWhite mb-5">
        {meal.strMeal}
      </h1>
      <p className="flex flex-col md:flex-row gap-3 mb-10">
        <button className="py-2 px-6 rounded-full bg-customGray text-customWhite">
          category:{" "}
          <span className="text-second-bold ">{meal.strCategory}</span>
        </button>
        <button className="py-2 px-6 rounded-full bg-customGray text-customWhite">
          area: <span className="text-second-bold">{meal.strArea}</span>
        </button>
      </p>
      <p className="mb-4 flex items-center text-second-bold text-customWhite">
        <span className="inline-block h-[32px] w-[16px] bg-customOrange mr-3 rounded-full"></span>
        <span>Ingredients</span>
      </p>
      <ul className="flex flex-col gap-3 text-customWhite mb-10">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="flex items-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full mr-2 bg-customWhite"></span>
            <span className="text-second-bold">{ingredient}</span>
          </li>
        ))}
      </ul>
      <p className="mb-4 flex items-center text-second-bold text-customWhite">
        <span className="inline-block h-[32px] w-[16px] bg-customBlue mr-3 rounded-full"></span>
        <span>Instructions</span>
      </p>
      <p className="text-customWhite text-second-medium">
        {meal.strInstructions}
      </p>
    </>
  );
}

export default async function MealPage({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const { mealSlug } = await params;

  return (
    <section id="meal page" className="px-10 md:px-20 pt-8 pb-40">
      <div className="flex flex-col">
        <div className="flex flex-col max-w-6xl w-full mx-auto items-center justify-between space-y-2 md:space-y-0 md:flex-row md:items-stretch">
          <Link href={"/"}>
            <Image
              alt=""
              height={100}
              width={100}
              src={"/images/logo-light.svg"}
              className="cursor-pointer"
            ></Image>
          </Link>
          <Link href={"/"}>
            <button className="px-6 py-3 pb-2 rounded-full bg-customWhite hover:ring-2 ring-customOrange cursor-pointer">
              <span className="inline-flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M15 6L9 12L15 18" stroke="#0E1325" strokeWidth="2" />
                </svg>
                <span className="text-second-bold">Back to categories</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="mt-14 max-w-4xl mx-auto flex flex-col items-start">
          <Suspense
            fallback={
              <div className="mt-[200px]">
                <LineSpinner size="40" stroke="4" speed="1" color="white" />
              </div>
            }
          >
            <MealInstruction mealSlug={mealSlug}></MealInstruction>
          </Suspense>
        </div>
      </div>
    </section>
  );
}
