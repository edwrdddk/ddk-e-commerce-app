import { createContext, useState, useEffect  } from "react";
import { addCollectionsAndDocuments } from "../utils/firebase/firebase";
import SHOP_DATA from "../shopdata";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   addCollectionsAndDocuments("categories", SHOP_DATA);
  // }, [])
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}