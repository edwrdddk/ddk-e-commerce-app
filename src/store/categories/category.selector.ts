import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducer = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) : CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap )
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

// JS

// import { createSelector } from "reselect";

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// )

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) => categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {})
// );

// export const selectCategoriesIsLoading = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.isLoading
// )

// pre Saga JS

// export const selectCategoriesMap = (state) => {
//   const categoriesMap = state.categories.categories.reduce(
//     (acc, { title, items }) => {
//       acc[title.toLowerCase()] = items;
//       return acc;
//     },
//     {}
//   );
//   return categoriesMap;
// };
