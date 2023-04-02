import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/categories/category.action";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      // console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}




