import Image from "next/image";

import { CategoryType } from "@/types/category";

export default function Category({
  category,
  isActive,
  changeCategory,
}: {
  category: CategoryType;
  isActive: boolean;
  changeCategory: () => void;
}) {
  const activeClass = isActive ? "bg-customOrange" : "";

  return (
    <div
      onClick={changeCategory}
      className={`w-full lg:w-[260px] cursor-pointer relative h-[55px] overflow-hidden shrink-0 ${activeClass} rounded-xl border border-customGray flex items-center px-12 hover:scale-[1.02] transition ease-in-out`}
    >
      <Image
        alt=""
        height={100}
        width={100}
        src={category.strCategoryThumb}
        className="absolute -left-13"
      ></Image>
      <h2
        className={`text-second-bold ${
          isActive ? "text-customBlack" : "text-customWhite"
        }`}
      >
        {category.strCategory}
      </h2>
    </div>
  );
}
