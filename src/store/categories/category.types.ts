// TS

export enum CATEGORIES_ACTION_TYPES  {
  FETCH_CATEGORIES_START = 'category/FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'category/FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILED = 'category/FETCH_CATEGORIES_FAILED',
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export type Category = {
  titile: string ;
  imageUrl: string;
  items: CategoryItem[];
}


// JS 

// export const CATEGORIES_ACTION_TYPES = {
//   // SET_CATEGORIES: 'category/SET_CATEGORIES',
//   FETCH_CATEGORIES_START: 'category/FETCH_CATEGORIES_START',
//   FETCH_CATEGORIES_SUCCESS: 'category/FETCH_CATEGORIES_SUCCESS',
//   FETCH_CATEGORIES_FAILED: 'category/FETCH_CATEGORIES_FAILED',
// }