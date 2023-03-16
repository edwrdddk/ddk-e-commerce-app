import { createContext, useState, useEffect  } from "react";
// import { addCollectionsAndDocuments } from "../utils/firebase/firebase";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
// import SHOP_DATA from "../shopdata";

export const CategoriesContext = createContext({
  categoriesMap: {},
});


export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);

  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, [])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}