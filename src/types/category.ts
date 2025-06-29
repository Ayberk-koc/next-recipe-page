export type CategoriesResponse = {
  categories: CategoryType[];
};

export type CategoryType = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
